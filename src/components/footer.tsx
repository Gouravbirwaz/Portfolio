export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Gourav Birwaz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
