/**
 * Footer - Composant Footer moderne avec design tokens
 *
 * ✅ Variables CSS shadcn/ui
 * ✅ Design tokens pour couleurs
 * ✅ Responsive
 */
export function Footer() {
  return (
    <footer className="h-14 bg-card border-t border-border">
      <div className="h-full px-6 flex items-center justify-between text-sm text-muted-foreground">
        <p>© 2025 FinCollect. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
