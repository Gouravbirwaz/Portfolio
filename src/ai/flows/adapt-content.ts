'use server';

/**
 * @fileOverview An AI agent that adapts portfolio content based on user interests.
 *
 * - adaptContent - A function that adapts content presentation based on user interests.
 * - AdaptContentInput - The input type for the adaptContent function.
 * - AdaptContentOutput - The return type for the adaptContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  hint: z.string(),
  tags: z.array(z.string()),
  liveUrl: z.string(),
  repoUrl: z.string(),
  keywords: z.array(z.string()),
});

const CertificationSchema = z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.string(),
    keywords: z.array(z.string()),
});

const PortfolioDataSchema = z.object({
    name: z.string(),
    objective: z.string(),
    skills: z.record(z.array(z.string())),
    projects: z.array(ProjectSchema),
    certifications: z.array(CertificationSchema),
});


const AdaptContentInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma separated list of the user interests, like "AI/ML", "backend development", "mobile apps".'),
  portfolio: PortfolioDataSchema.describe('The entire portfolio data as a JSON object.'),
});
export type AdaptContentInput = z.infer<typeof AdaptContentInputSchema>;

const AdaptContentOutputSchema = z.object({
  adaptedBio: z
    .string()
    .describe('Rewrite the objective to be a compelling, personalized bio that highlights the aspects most relevant to the user\'s interests. This should be a short paragraph.'),
  highlightedSkills: z.array(z.string()).describe("A list of the most relevant skill names from the portfolio, based on the user's interests."),
  relevantProjects: z.array(ProjectSchema).describe("A list of the most relevant projects from the portfolio. Only include projects that directly match the user's interests."),
  relevantCertifications: z.array(CertificationSchema).describe("A list of the most relevant certifications from the portfolio. Only include certifications that directly match the user's interests."),
  talkingPoints: z.array(z.string()).describe('A short, bulleted list of 2-3 key talking points or highlights that a recruiter interested in the specified fields would find most compelling. Frame them as accomplishments.')
});
export type AdaptContentOutput = z.infer<typeof AdaptContentOutputSchema>;

export async function adaptContent(input: AdaptContentInput): Promise<AdaptContentOutput> {
  return adaptContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptContentPrompt',
  input: {schema: AdaptContentInputSchema},
  output: {schema: AdaptContentOutputSchema},
  prompt: `You are an expert AI career coach, specializing in tailoring resumes and portfolios for specific job roles and recruiter interests.

A user has provided their portfolio data and a list of their interests. Your task is to dynamically adapt the portfolio content to be as compelling and relevant as possible to someone with those interests.

**User Interests:** {{{interests}}}

**Full Portfolio Data:**
\`\`\`json
{{{json portfolio}}}
\`\`\`

Based on the user's interests, you must:
1.  **Rewrite the Bio:** Transform the user's "objective" into a personalized, first-person "bio". It should be engaging and directly address the user's interests by highlighting the most relevant skills and experiences from the portfolio.
2.  **Filter Projects:** Analyze the project descriptions and keywords. Return ONLY the projects that are highly relevant to the user's interests. If no projects are relevant, return an empty array.
3.  **Filter Certifications:** Similarly, return ONLY the certifications that are relevant to the user's interests. If none are relevant, return an empty array.
4.  **Select Highlighted Skills:** From the provided skills list, pick out the most important and relevant skills that match the user's interests.
5.  **Create Talking Points:** Generate 2-3 concise, impactful bullet points that summarize the candidate's key strengths and accomplishments as they relate to the stated interests. This is for a quick summary.

Return the results in the specified JSON format. Ensure all returned projects and certifications are from the original portfolio data.`,
});

const adaptContentFlow = ai.defineFlow(
  {
    name: 'adaptContentFlow',
    inputSchema: AdaptContentInputSchema,
    outputSchema: AdaptContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);


