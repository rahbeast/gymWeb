import { createFileRoute } from "@tanstack/react-router";
import { CalorieCalculator } from "@/components/CalorieCalculator";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Calorie Calculator — GymGhar" },
      { name: "description", content: "Calculate your daily calorie target and macros for fat loss, maintenance or muscle gain." },
      { property: "og:title", content: "Calorie Calculator — GymGhar" },
      { property: "og:description", content: "Free TDEE & macro calculator built for Nepali lifters." },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-widest uppercase">Step 1</span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold">Calorie <span className="text-gradient">Calculator</span></h1>
        <p className="mt-3 text-muted-foreground">
          Enter your details to get your BMR, TDEE and a daily calorie target with macros tailored to your goal.
        </p>
      </div>
      <CalorieCalculator />
    </section>
  );
}
