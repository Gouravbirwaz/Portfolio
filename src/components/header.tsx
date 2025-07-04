import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-color bg-bg-secondary/30 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <span className="font-bold font-headline text-lg tracking-wider text-gradient">
              <span className="text-accent group-hover:text-accent-secondary transition-colors duration-300 before:content-['P(']"></span>
              GOURAV 
              <span className="text-accent group-hover:text-accent-secondary transition-colors duration-300 after:content-[')=1']"></span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="#ai-adapter"
            className="transition-colors hover:text-accent text-text-secondary before:content-['{_'] before:opacity-0 hover:before:opacity-100 after:content-['_}'] after:opacity-0 hover:after:opacity-100"
          >
            AI Adapter
          </Link>
          <Link
            href="#deployed-models"
            className="transition-colors hover:text-accent text-text-secondary before:content-['{_'] before:opacity-0 hover:before:opacity-100 after:content-['_}'] after:opacity-0 hover:after:opacity-100"
          >
            Projects
          </Link>
          <Link
            href="#training-pipeline"
            className="transition-colors hover:text-accent text-text-secondary before:content-['{_'] before:opacity-0 hover:before:opacity-100 after:content-['_}'] after:opacity-0 hover:after:opacity-100"
          >
            Resume
          </Link>
          <Link
            href="#deploy-connection"
            className="transition-colors hover:text-accent text-text-secondary before:content-['{_'] before:opacity-0 hover:before:opacity-100 after:content-['_}'] after:opacity-0 hover:after:opacity-100"
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild variant="ghost" className="hidden sm:flex border-2 border-accent text-accent hover:bg-accent hover:text-primary-foreground">
            <a href="#deploy-connection">ContactMe()</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
