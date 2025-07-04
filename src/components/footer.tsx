export function Footer() {
  return (
    <footer className="border-t border-border-color/50 bg-black/50 py-6">
      <div className="container mx-auto">
        <p className="text-center text-sm text-text-secondary/70 font-code">
          &copy; {new Date().getFullYear()} Gourav Birwaz. Crafted with AI precision and creative vision.
        </p>
      </div>
    </footer>
  );
}
