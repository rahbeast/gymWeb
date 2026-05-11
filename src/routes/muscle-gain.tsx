import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import plate from "@/assets/musclegain-plate.jpg";
import oldPlate from "@/assets/musclegain-old-plate.jpg";
import newPlate from "@/assets/musclegain-new-plate.jpg";

export const Route = createFileRoute("/muscle-gain")({
  head: () => ({
    meta: [
      { title: "Muscle Gain Guide — GymGhar" },
      { name: "description", content: "Build muscle the Nepali way: smart calorie surplus with dal bhat, eggs, paneer, chicken and milk." },
      { property: "og:title", content: "Muscle Gain with Nepali Food — GymGhar" },
      { property: "og:description", content: "A clean bulking plan using everyday Nepali food." },
      { property: "og:image", content: plate },
    ],
  }),
  component: MuscleGain,
});

function MuscleGain() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase">Build Muscle</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
              Eat big. <br /> Lift heavy. <span className="text-gradient">Grow.</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Skinny? Hardgainer? You're probably eating less than you think.
              Here's how to push calories up the smart way using Nepali staples.
            </p>
            <Button asChild className="mt-6 bg-primary-gradient text-primary-foreground shadow-glow">
              <Link to="/calculator">Get Your Bulking Calories →</Link>
            </Button>
          </div>
          <Card className="overflow-hidden bg-card shadow-card-elev">
            <img src={plate} alt="Nepali muscle gain thali"
              width={1024} height={1024} loading="lazy"
              className="w-full h-full object-cover" />
            <div className="p-4 text-sm text-muted-foreground">
              Sample bulking thali — full rice, dal, eggs, chicken, paneer, banana & milk.
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Smart Bulk vs Sloppy Bulk</h2>
        <p className="text-muted-foreground mb-6 -mt-4">More calories doesn't mean junk. Compare the plates.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden border-destructive/30">
            <img src={oldPlate} alt="Sloppy bulk plate with chowmein, momo, pizza and sugary tea"
              width={1024} height={1024} loading="lazy"
              className="w-full aspect-square object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 text-destructive font-semibold"><X className="h-5 w-5" /> Sloppy Bulk</div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Momos, chowmein, pizza every other day</li>
                <li>• Tons of oil, no protein source</li>
                <li>• 5 cups sugary tea</li>
                <li>• Random eating, no tracking</li>
                <li>• Result: belly fat, no muscle</li>
              </ul>
            </div>
          </Card>
          <Card className="overflow-hidden border-primary/40">
            <img src={newPlate} alt="Smart bulk Nepali thali with rice, dal, chicken, eggs, paneer and milk"
              width={1024} height={1024} loading="lazy"
              className="w-full aspect-square object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary font-semibold"><Check className="h-5 w-5" /> Smart Bulk</div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Full plate dal bhat 2x a day</li>
                <li>• 4–6 eggs daily, 200g chicken/fish/paneer</li>
                <li>• 1L full-fat milk + banana shake post workout</li>
                <li>• Roti with ghee, peanut butter on bread</li>
                <li>• ~300–400 kcal surplus, lift heavy 4x / week</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Beginner Rules for Gaining</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {rules.map((r, i) => (
            <Card key={i} className="p-6 bg-card">
              <div className="font-display text-3xl text-primary">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 font-bold">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">A Day on the Bulk Plan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bulkDay.map((m) => (
            <Card key={m.meal} className="p-6 bg-card">
              <div className="text-xs text-primary uppercase tracking-widest font-semibold">{m.meal}</div>
              <div className="font-display text-lg font-bold mt-1">~{m.kcal} kcal</div>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                {m.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

const rules = [
  { title: "Calorie surplus", desc: "Eat ~300–400 kcal above maintenance. Slow gain = lean gain." },
  { title: "2g protein per kg", desc: "Eggs, dal, chicken, paneer, soyabean, milk — spread across 4 meals." },
  { title: "Lift heavy & progress", desc: "Compound lifts: squat, deadlift, bench, row, overhead press. Add weight weekly." },
  { title: "Sleep 7–9 hours", desc: "Muscle is built when you rest, not when you train. No sleep, no gain." },
  { title: "Liquid calories", desc: "Milk + banana + peanut butter shake adds 500 easy kcal when food feels too much." },
  { title: "Track weekly", desc: "Aim for +0.25–0.4 kg per week. Faster than that is mostly fat." },
];

const bulkDay = [
  { meal: "Breakfast", kcal: 700, items: ["4 eggs omelette", "2 roti with ghee", "1 glass milk + banana", "Peanut butter spread"] },
  { meal: "Lunch", kcal: 900, items: ["Full plate rice (2 katori)", "Bowl of dal", "200g chicken curry", "Saag + salad"] },
  { meal: "Snack", kcal: 500, items: ["Mass shake: milk + banana + oats + PB", "Handful of nuts"] },
  { meal: "Dinner", kcal: 800, items: ["Rice or 3 roti", "Paneer / soyabean curry", "Eggs or fish", "Curd (dahi)"] },
];
