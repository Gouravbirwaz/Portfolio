import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg tracking-wider">ML//ME</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="#projects"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Projects
          </Link>
          <Link
            href="#resume"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Resume
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild variant="ghost" className="hidden sm:flex">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
