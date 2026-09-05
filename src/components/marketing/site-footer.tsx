import Link from "next/link";
import { Wordmark } from "@/components/brand/logo";

const links = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Formation", href: "/#formation" },
  { label: "Shadow Mode", href: "/#shadow-mode" },
  { label: "Preview", href: "/#preview" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-3">
            <Wordmark />
            <p className="max-w-xs text-sm text-muted-foreground">
              Your money, moving together.
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Alepes</p>
          <p className="max-w-lg text-xs leading-relaxed">
            Alepes provides automation infrastructure, not investment advice. All
            investment decisions remain yours.
          </p>
        </div>
      </div>
    </footer>
  );
}