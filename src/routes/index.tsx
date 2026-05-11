import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, Flame, Dumbbell, Apple } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Dark gym" width={1600} height={1024}
            className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase">
              Nepal's Smart Fitness Hub
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Build the body <br />
              you <span className="text-gradient">deserve.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              GymGhar helps you calculate your daily calories and gives you
              real Nepali food plans to lose fat or build muscle — no
              guesswork, just results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground hover:opacity-90 shadow-glow">
                <Link to="/calculator"><Calculator className="mr-2 h-4 w-4" /> Calculate Calories</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
                <Link to="/fat-loss">Explore Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Choose your <span className="text-gradient">mission</span></h2>
          <p className="text-muted-foreground mt-3">Pick the path that matches where you are right now.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <GoalCard
            to="/fat-loss"
            icon={<Flame className="h-7 w-7" />}
            title="I want to get LEAN"
            desc="Cut fat, keep your strength. Reduce rice, double the protein and fiber. Nepali food, smart portions."
            cta="Start Fat Loss"
          />
          <GoalCard
            to="/muscle-gain"
            icon={<Dumbbell className="h-7 w-7" />}
            title="I want to build MUSCLE"
            desc="Eat in surplus the right way. More dal, eggs, paneer, chicken — fuel growth without sloppy bulking."
            cta="Start Muscle Gain"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-3 gap-4">
          <Feature icon={<Calculator />} title="Smart Calculator" desc="Mifflin–St Jeor BMR + activity to dial in your daily calories." />
          <Feature icon={<Apple />} title="Nepali Food First" desc="Dal bhat, saag, sekuwa, paneer — guidance built around what you actually eat." />
          <Feature icon={<Dumbbell />} title="Beginner Friendly" desc="Clear portion swaps and meal ideas — no fancy supplements required." />
        </div>
      </section>
    </>
  );
}

function GoalCard({ to, icon, title, desc, cta }: { to: string; icon: React.ReactNode; title: string; desc: string; cta: string }) {
  return (
    <Link to={to} className="group">
      <Card className="p-8 h-full bg-card border-border hover:border-primary transition-all hover:shadow-glow">
        <div className="h-12 w-12 rounded-lg bg-primary/15 text-primary flex items-center justify-center">{icon}</div>
        <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{desc}</p>
        <span className="mt-6 inline-block text-primary font-semibold group-hover:translate-x-1 transition-transform">{cta} →</span>
      </Card>
    </Link>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="p-6 bg-card">
      <div className="h-10 w-10 rounded-md bg-primary/15 text-primary flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5">{icon}</div>
      <h4 className="mt-4 font-display text-lg font-bold">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </Card>
  );
}
