import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {currentYear} Roissyah Fernanda Khoiroh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:roissyahfk@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/roissyahfernanda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/roissyahf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://public.tableau.com/app/profile/roissyahfernanda/vizzes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Tableau"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
