import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Eye,
  Scale,
  ShieldCheck,
  Target,
  Waves,
  Braces,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PublicHeader } from "@/components/marketing/public-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { HeroFlow } from "@/components/marketing/hero-flow";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <PublicHeader />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:items-center md:pb-28 md:pt-24">
          <div>
            <Badge variant="outline" className="gap-1.5 text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Rules-based capital allocation
            </Badge>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Your money,
              <br />
              moving together.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Alepes helps you define how new money should flow into your
              portfolio, then directs contributions toward the holdings that need
              them most.
            </p>
            <p className="mt-3 text-sm font-medium text-foreground/70">
              Rules-based capital allocation, with every decision explained.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" render={<Link href="/#preview" />}>
                Explore the preview
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/#how-it-works" />}>
                See how it works
              </Button>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Preview only — live transfers and live brokerage execution are not
              currently available.
            </p>
          </div>
          <HeroFlow />
        </div>
      </section>

      {/* ============ FLOW / HOW IT WORKS ============ */}
      <section id="how-it-works" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              How it works
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From cash flow to formation.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
            <FlowSteps />
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <Scale className="h-4 w-4 text-brand" />
                <h3 className="text-sm font-medium text-foreground">
                  Two policies, kept separate
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your <strong className="text-foreground">cash-flow policy</strong>{" "}
                decides <em>whether and how much</em> to deploy from new money —
                triggers, reserves, and caps. Your{" "}
                <strong className="text-foreground">investment policy</strong>{" "}
                decides <em>where it goes</em>: the target allocation and bands
                that define your formation. Keeping them separate is what makes
                every decision explainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RULES ============ */}
      <section id="rules" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Cash-flow rules
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your automation, in rules you author.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <RuleBuilder />
          </div>
        </div>
      </section>

      {/* ============ FORMATION ============ */}
      <section id="formation" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-brand" />
                <p className="text-sm font-medium uppercase tracking-wider text-brand">
                  Formation
                </p>
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Stay in formation with new money.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Formation</strong> is how
                close your portfolio is to its target allocation. Holdings drift
                over time; Alepes uses each new contribution to move the school
                back toward formation — underweight first, without forced selling.
              </p>
            </div>
            <FormationTable />
          </div>
        </div>
      </section>

      {/* ============ SHADOW MODE ============ */}
      <section id="shadow-mode" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-brand" />
                <p className="text-sm font-medium uppercase tracking-wider text-brand">
                  Shadow Mode
                </p>
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                See the decision before anything moves.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Shadow Mode evaluates your rules and shows exactly what{" "}
                <em>would</em> happen — a full plan, with nothing executed.
              </p>
              <div className="mt-6">
                <Badge className="bg-negative/10 text-negative">
                  Simulation only — no money moved
                </Badge>
              </div>
            </div>
            <ShadowTrace />
          </div>
        </div>
      </section>

      {/* ============ EXPLAINABILITY ============ */}
      <section id="explainability" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Explainability
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Every decision, traceable.
            </h2>
          </div>
          <ExplainPanel />
        </div>
      </section>

      {/* ============ PRODUCT PREVIEW ============ */}
      <section id="preview" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Product preview
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A look at Alepes.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Static mock views of the product. No live connections, no real
              accounts.
            </p>
          </div>
          <PreviewTabs />
        </div>
      </section>

      {/* ============ SAFETY / BOUNDARY ============ */}
      <section id="safety" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-3">
            <BoundaryCard
              icon={ShieldCheck}
              title="Built for visibility before automation."
              body="Alepes is being developed as a rules-based capital-allocation system. The preview shows product concepts and simulated behavior; live financial execution is not represented here."
            />
            <BoundaryCard
              icon={Braces}
              title="You define the rules and targets."
              body="Nothing moves without a rule and an allocation you authored. Reserves, caps, and target percentages are yours to set."
            />
            <BoundaryCard
              icon={Waves}
              title="Contribution-based by default."
              body="Alepes directs new money toward underweight holdings. It does not sell existing holdings unless you explicitly allow it."
            />
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            This preview is for informational purposes only and is not a
            recommendation to buy or sell any security. Alepes does not currently
            offer live brokerage execution or funds transfer.
          </p>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Build your formation.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Define how new money should move before it ever does.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" render={<Link href="/#preview" />}>
                  Explore the preview
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ---------- static mock sections ---------- */

function FlowSteps() {
  const steps = [
    "Qualifying deposit detected",
    "Cash-flow rule evaluated",
    "Reserve preserved",
    "Deployable amount calculated",
    "Portfolio contribution allocated",
    "Shadow plan explained",
  ];
  return (
    <ol className="space-y-0">
      {steps.map((s, i) => (
        <li key={s} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-xs font-semibold text-brand">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <ArrowDown className="h-5 w-5 text-border" />
            )}
          </div>
          <span className="pt-1 text-sm font-medium text-foreground">{s}</span>
        </li>
      ))}
    </ol>
  );
}

function RuleBuilder() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card md:col-span-2">
      <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-brand/[0.06]">
        <h3 className="text-base font-semibold text-foreground">
          Example rule — authored by you
        </h3>
        <Badge variant="outline" className="gap-1 text-positive">
          <span className="h-1.5 w-1.5 rounded-full bg-positive" />
          Active
        </Badge>
      </div>
      <div className="grid gap-px overflow-hidden bg-border sm:grid-cols-3">
        <div className="bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-brand">WHEN</p>
          <p className="mt-2 text-sm font-medium text-foreground">
            a qualifying deposit is detected
          </p>
        </div>
        <div className="bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-brand">IF</p>
          <p className="mt-2 text-sm font-medium text-foreground">
            checking remains above $5,000
          </p>
        </div>
        <div className="bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-brand">THEN</p>
          <p className="mt-2 text-sm font-medium text-foreground">
            invest 40% of the deployable amount
          </p>
        </div>
      </div>
    </div>
  );
}

function FormationTable() {
  const rows = [
    { sym: "VTI", target: "50%", current: "44%", action: "Buy", tone: "positive" },
    { sym: "AAPL", target: "25%", current: "30%", action: "Hold", tone: "muted" },
    { sym: "VXUS", target: "25%", current: "26%", action: "Hold", tone: "muted" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-brand/5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">Formation check</h3>
        <Badge variant="outline" className="gap-1 text-warning">drifted</Badge>
      </div>
      <table className="mt-5 w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="pb-2 font-medium">Symbol</th>
            <th className="pb-2 text-right font-medium">Target</th>
            <th className="pb-2 text-right font-medium">Current</th>
            <th className="pb-2 text-right font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60">
          {rows.map((r) => (
            <tr key={r.sym}>
              <td className="py-3 font-mono font-medium">{r.sym}</td>
              <td className="py-3 text-right tabular text-muted-foreground">{r.target}</td>
              <td className="py-3 text-right tabular">{r.current}</td>
              <td className="py-3 text-right">
                <span className={r.tone === "positive" ? "font-medium text-positive" : "text-muted-foreground"}>
                  {r.action}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 rounded-lg bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
        New contribution → directed primarily toward VTI, the most underweight
        holding.
      </p>
    </div>
  );
}

function ShadowTrace() {
  const rows = [
    ["Deposit detected", "$1,250"],
    ["Reserve preserved", "$5,000"],
    ["Rule matched", "Invest 40%"],
    ["Deployable", "$500"],
    ["Formation checked", "—"],
    ["Allocation calculated", "—"],
    ["Shadow plan created", "—"],
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-brand/5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">Shadow trace</h3>
        <Badge className="bg-negative/10 text-negative">No money moved</Badge>
      </div>
      <div className="mt-5 divide-y divide-border/60">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-muted-foreground">{k}</span>
            <span className="font-medium tabular text-foreground">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExplainPanel() {
  const qa = [
    ["What happened?", "A qualifying deposit of $1,250 was detected."],
    ["Which rule matched?", "“Invest 40%” above the $5,000 reserve."],
    ["Why was this amount deployable?", "$500 — 40% of the deposit, after the reserve."],
    ["Which holding was underweight?", "VTI, at 44% vs. its 50% target."],
    ["Why did it receive this allocation?", "It had the largest actionable gap."],
    ["What would happen next?", "The plan is held for your review — nothing executes."],
  ];
  return (
    <div className="mt-10 rounded-2xl border border-border bg-card">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-sm font-medium text-foreground">Decision audit</h3>
      </div>
      <dl className="divide-y divide-border/60 px-6">
        {qa.map(([q, a]) => (
          <div key={q} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr]">
            <dt className="text-sm text-muted-foreground">{q}</dt>
            <dd className="text-sm font-medium text-foreground">{a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function PreviewTabs() {
  const tabs = [
    {
      label: "Overview",
      body: (
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat label="Portfolio value" value="$24,812" />
          <Stat label="Formation" value="94.2" suffix=" / 100" />
          <Stat label="Next contribution" value="Awaiting" />
        </div>
      ),
    },
    {
      label: "Formation",
      body: <FormationTable />,
    },
    {
      label: "Rules",
      body: <RuleBuilder />,
    },
    {
      label: "Shadow Mode",
      body: <ShadowTrace />,
    },
    {
      label: "Activity",
      body: (
        <ul className="space-y-2">
          {["Deposit detected — $1,250", "Rule matched — Invest 40%", "Reserve preserved — $5,000", "Shadow plan created"].map(
            (s) => (
              <li key={s} className="rounded-lg bg-secondary/50 px-4 py-3 text-sm text-foreground">
                {s}
              </li>
            )
          )}
        </ul>
      ),
    },
  ];
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex gap-1 overflow-x-auto border-b border-border px-3 py-2">
        {tabs.map((t) => (
          <span
            key={t.label}
            className="whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground first:bg-brand/10 first:text-brand"
          >
            {t.label}
          </span>
        ))}
      </div>
      <div className="p-6">{tabs[1].body}</div>
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold tabular text-foreground">
        {value}
        {suffix && <span className="text-sm font-normal text-muted-foreground">{suffix}</span>}
      </p>
    </div>
  );
}

function BoundaryCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}