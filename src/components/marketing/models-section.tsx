import {
  Boxes,
  Layers,
  ShieldCheck,
  GitBranch,
  Scale,
  Cpu,
  Landmark,
  ArrowDown,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// A future-facing section introducing Alepes's planned **Models** concept.
// Nothing here implies a live feature: every model is framed as producing
// *investment intent* that Alepes resolves through its existing policy.

export function ModelsSection() {
  return (
    <section id="models" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-brand" />
            <p className="text-sm font-medium uppercase tracking-wider text-brand">
              Future capability
            </p>
          </div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Models produce opinions. Alepes decides what is allowed.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Designed for what comes next, Alepes may one day let models
            influence a Formation — at the level of a single holding, of the
            whole portfolio, or both. A model would never submit an order or
            move money. It produces{" "}
            <strong className="text-foreground">investment intent</strong>, an
            input that Alepes resolves through your policy, constraints, and
            execution rules.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge className="bg-warning/10 text-warning">
              Designed for what comes next
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              Not available today
            </Badge>
          </div>
        </div>

        {/* Conceptual hierarchy */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-sm font-medium text-foreground">
            How a model would fit — one direction of flow
          </h3>
          <div className="mt-6 flex flex-col items-stretch gap-1">
            {[
              "Model",
              "Investment Intent",
              "Alepes Policy",
              "Resolved Formation",
              "Allocation Engine",
              "Shadow / Execute",
            ].map((step, i, arr) => (
              <div key={step} className="flex flex-col items-center">
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ArrowDown className="my-1 h-5 w-5 text-border" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            The model is an input to Alepes policy — not the authority. Every
            step after <strong className="text-foreground">intent</strong> is
            Alepes&apos;s own deterministic machinery, unchanged.
          </p>
        </div>

        {/* Two scopes */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <Boxes className="h-4 w-4 text-brand" />
              <h3 className="text-sm font-medium text-foreground">
                Holding models
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A model assigned to one holding evaluates that asset and produces
              a signal or a constrained intent — a valuation read, a momentum
              view, a quality flag, a volatility measure, or a factor score. It
              never produces a broker order directly.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Valuation", "Momentum", "Quality", "Volatility", "Factor score"].map(
                (t) => (
                  <Badge key={t} variant="outline" className="text-muted-foreground">
                    {t}
                  </Badge>
                )
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-brand" />
              <h3 className="text-sm font-medium text-foreground">
                Formation models
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A Formation-wide model evaluates the portfolio as a whole and may
              propose target weights or portfolio-level adjustments. Alepes
              still validates the resulting Formation against your rules and
              safety constraints.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Minimum volatility",
                "Risk parity",
                "Black-Litterman",
                "Factor allocation",
                "Volatility targeting",
              ].map((t) => (
                <Badge key={t} variant="outline" className="text-muted-foreground">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Formation model diagram */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="text-sm font-medium text-foreground">
            A future Formation with models
          </h3>
          <div className="mt-4 overflow-x-auto">
            <pre className="font-mono text-[13px] leading-relaxed text-foreground sm:text-sm">
{`Formation model
  portfolio-risk-v4

AAPL → valuation-quality-v2
MSFT → momentum-v1
VTI  → (no holding model)`}
            </pre>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            When both levels exist, composition is explicit:{" "}
            <strong className="text-foreground">
              holding models contribute asset-specific signals while a
              Formation-level model resolves those signals into a coherent
              portfolio view.
            </strong>{" "}
            There is no &ldquo;most specific model wins.&rdquo; Any override
            behavior is a policy you configure, not a default.
          </p>
        </div>

        {/* Model safety */}
        <div className="mt-12">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <h3 className="text-sm font-medium text-foreground">
              Model output is subordinate to Alepes policy
            </h3>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Example
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="text-foreground">
                  Model: <span className="font-mono">AAPL target = 40%</span>
                </p>
                <p className="text-foreground">
                  Constraint:{" "}
                  <span className="font-mono">max single holding = 20%</span>
                </p>
                <p className="font-medium text-brand">
                  Result: Alepes caps the target at 20%
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Example
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="text-foreground">
                  Model: <span className="font-mono">allocate $800</span>
                </p>
                <p className="text-foreground">
                  Capital plan:{" "}
                  <span className="font-mono">only $240 investable</span>
                </p>
                <p className="font-medium text-brand">
                  Result: Alepes can allocate at most $240
                </p>
              </div>
            </div>
          </div>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <li>Disabled securities remain disabled.</li>
            <li>Reserve rules still apply.</li>
            <li>Contribution limits still apply.</li>
            <li>Execution policy remains independent.</li>
            <li>Models cannot bypass pause or kill switches.</li>
          </ul>
        </div>

        {/* Shadow Mode integration */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-brand" />
            <h3 className="text-sm font-medium text-foreground">
              Models would start in Shadow Mode
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A future model would first run in Shadow Mode, where Alepes compares
            the current Formation, your target Formation, and a model-resolved
            Formation — side by side, with nothing executed. This is a
            simulation to review, not a live allocation.
          </p>
          <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            <div className="bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Current Formation
              </p>
              <p className="mt-2 font-mono text-lg font-medium tabular text-foreground">
                40 / 35 / 25
              </p>
            </div>
            <div className="bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                User target
              </p>
              <p className="mt-2 font-mono text-lg font-medium tabular text-foreground">
                50 / 30 / 20
              </p>
            </div>
            <div className="bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Model-resolved target
              </p>
              <p className="mt-2 font-mono text-lg font-medium tabular text-brand">
                44 / 38 / 18
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A new flow of <span className="font-mono tabular">$500</span> would
            be allocated against the resolved target, and the difference would
            be explained — not silently adopted.
          </p>
          <div className="mt-3">
            <Badge className="bg-negative/10 text-negative">
              Simulation only — no live model-driven trading today
            </Badge>
          </div>
        </div>

        {/* Explainability */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-brand" />
            <h3 className="text-sm font-medium text-foreground">
              Every model evaluation, versioned and auditable
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A future Alepes decision could record: which model was used, its
            version, the input snapshot, the resulting intent, the policy
            constraints applied, the final resolved Formation, the Shadow or
            execution decision, and an explanation of why the result changed.
            Alepes should be able to explain not only what a model suggested,
            but how Alepes transformed that suggestion into an allowed
            decision.
          </p>
        </div>

        {/* External ecosystem */}
        <div className="mt-12">
          <div className="flex items-center gap-2">
            <Landmark className="h-4 w-4 text-brand" />
            <h3 className="text-sm font-medium text-foreground">
              A future model ecosystem
            </h3>
          </div>
          <div className="mt-5 rounded-2xl border border-brand/20 bg-brand/[0.04] p-6">
            <p className="text-sm font-medium leading-relaxed text-foreground">
              Alepes owns the model system. External libraries may provide
              model implementations.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Models produce investment intent. Alepes resolves that intent into
              a Formation and applies its existing deterministic financial and
              safety policies.
            </p>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="text-sm font-medium text-foreground">
                Alepes-native deterministic models
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Momentum, valuation, volatility targeting, contribution tilt,
                and factor scoring — simple, explainable, and policy-bounded.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="text-sm font-medium text-foreground">
                Portfolio-model libraries
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Proven portfolio-optimization libraries — such as{" "}
                <span className="font-mono text-xs">PyPortfolioOpt</span> — may
                one day provide Formation-wide models like minimum volatility,
                maximum Sharpe, Black-Litterman, or hierarchical risk parity.
                This is an example of a type of integration, not something
                integrated today.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h4 className="text-sm font-medium text-foreground">
                Future research and ML
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Frameworks such as <span className="font-mono text-xs">Qlib</span>{" "}
                could eventually sit behind the Alepes model-runtime boundary for
                research or ML models. This is a possible future direction, not a
                current dependency.
              </p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Alepes is designed to host multiple model types without making any
            one quantitative framework the financial brain of the product.
          </p>
        </div>

        {/* Closing anchor */}
        <div className="mt-12 flex items-start gap-2 rounded-2xl border border-border bg-card p-6">
          <Scale className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
          <p className="text-sm font-medium leading-relaxed text-foreground">
            Models produce opinions. Alepes decides what is allowed.
          </p>
        </div>
      </div>
    </section>
  );
}