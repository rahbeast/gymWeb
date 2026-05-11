import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import plate from "@/assets/fatloss-plate.jpg";
import oldPlate from "@/assets/fatloss-old-plate.jpg";
import newPlate from "@/assets/fatloss-new-plate.jpg";

export const Route = createFileRoute("/fat-loss")({
  head: () => ({
    meta: [
      { title: "Fat Loss Guide — GymGhar" },
      { name: "description", content: "Lose fat with a Nepali-food based plan: reduce rice carbs, increase protein and fiber, control portions." },
      { property: "og:title", content: "Fat Loss with Nepali Food — GymGhar" },
      { property: "og:description", content: "Beginner friendly fat loss diet using dal bhat, saag, chicken and more." },
      { property: "og:image", content: plate },
    ],
  }),
  component: FatLoss,
});

function FatLoss() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase">Get Lean</span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
              Cut the fat. <br /> Keep the <span className="text-gradient">strength.</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              You don't need to starve. Just shift your plate — less rice, more
              protein, more vegetables. Here's exactly how to do it with Nepali
              food you already love.
            </p>
            <Button asChild className="mt-6 bg-primary-gradient text-primary-foreground shadow-glow">
              <Link to="/calculator">Get Your Calorie Target →</Link>
            </Button>
          </div>
          <Card className="overflow-hidden bg-card shadow-card-elev">
            <img src={plate} alt="Nepali fat loss thali"
              width={1024} height={1024} loading="lazy"
              className="w-full h-full object-cover" />
            <div className="p-4 text-sm text-muted-foreground">
              Sample fat-loss thali — small rice, big saag, dal & grilled chicken.
            </div>
          </Card>
        </div>
      </section>

      {/* Portion shifts */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">The Plate Shift</h2>
        <p className="text-muted-foreground mb-6 -mt-4">See the difference. Same ingredients, smarter portions.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden border-destructive/30">
            <img src={oldPlate} alt="Old Nepali plate heavy in rice and fried food"
              width={1024} height={1024} loading="lazy"
              className="w-full aspect-square object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 text-destructive font-semibold"><X className="h-5 w-5" /> Old Plate</div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• 3–4 big servings of rice (bhat)</li>
                <li>• Tiny portion of vegetables</li>
                <li>• Fried snacks, sel roti, sweets daily</li>
                <li>• Sugary milk tea 4–5 times</li>
                <li>• Barely any direct protein source</li>
              </ul>
            </div>
          </Card>
          <Card className="overflow-hidden border-primary/40">
            <img src={newPlate} alt="Lean Nepali plate with small rice, saag, dal and grilled chicken"
              width={1024} height={1024} loading="lazy"
              className="w-full aspect-square object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary font-semibold"><Check className="h-5 w-5" /> Lean Plate</div>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• 1 small katori of rice (or swap with roti)</li>
                <li>• Half the plate = saag / vegetable curry</li>
                <li>• 1 bowl dal + 150–200g chicken / fish / paneer / 3 eggs</li>
                <li>• Cucumber, mooli, tomato salad with every meal</li>
                <li>• Black tea or milk tea without sugar</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Rules */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Beginner Rules for Fat Loss</h2>
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

      {/* Sample day */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">A Day on the Lean Plan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fatLossDay.map((m) => (
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
  { title: "Halve the rice", desc: "Cut your usual rice portion in half. Replace the volume with saag and vegetable curry." },
  { title: "Protein every meal", desc: "Eggs, dal, chicken, fish, paneer, tofu or soyabean — aim for 1.6–2g per kg body weight daily." },
  { title: "Drink water first", desc: "2–3 litres a day. A glass before each meal helps you feel full faster." },
  { title: "Cut hidden sugar", desc: "Skip sugary tea, soft drinks, sel roti, jalebi. These add 300–500 hidden kcal." },
  { title: "Walk 8k steps", desc: "Cheapest fat-burner. Add a 30 min brisk walk after dinner." },
  { title: "Strength train 3x", desc: "Lifting protects muscle while you lose fat. Don't just do cardio." },
];

const fatLossDay = [
  { meal: "Breakfast", kcal: 350, items: ["3 boiled eggs (or 1 whole + 4 whites)", "1 small roti", "Cucumber + tomato", "Black tea, no sugar"] },
  { meal: "Lunch", kcal: 500, items: ["1 katori rice", "1 bowl dal", "150g grilled chicken / fish", "Big serving of saag"] },
  { meal: "Snack", kcal: 200, items: ["1 apple or guava", "Roasted chana (mutthi bhar)", "Green tea"] },
  { meal: "Dinner", kcal: 450, items: ["2 roti (no ghee)", "Vegetable curry", "Paneer bhurji or eggs", "Salad plate"] },
];
