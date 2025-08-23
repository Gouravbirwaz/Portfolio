'use server';

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {firebase} from '@genkit-ai/firebase/next';

export const ai = genkit({
<<<<<<< HEAD
  plugins: [googleAI(), firebase()],
=======
  plugins: [googleAI({ apiKey: process.env.GEMINI_API })],
>>>>>>> e9ffe490246934a225fd934a3d2ac36813b8d4ac
  model: 'googleai/gemini-2.0-flash',
});

