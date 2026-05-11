import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

type Goal = "lose" | "maintain" | "gain";

const activityFactors = {
  sedentary: { label: "Sedentary (desk job, no exercise)", v: 1.2 },
  light: { label: "Light (1-3 workouts / week)", v: 1.375 },
  moderate: { label: "Moderate (3-5 workouts / week)", v: 1.55 },
  active: { label: "Active (6-7 workouts / week)", v: 1.725 },
  athlete: { label: "Athlete (twice a day)", v: 1.9 },
} as const;

export function CalorieCalculator() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState(22);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState<keyof typeof activityFactors>("moderate");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [result, setResult] = useState<null | {
    bmr: number; tdee: number; target: number; protein: number; carbs: number; fat: number;
  }>(null);

  const compute = () => {
    const bmr = sex === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * activityFactors[activity].v;
    const adj = goal === "lose" ? -500 : goal === "gain" ? 350 : 0;
    const target = Math.round(tdee + adj);
    const protein = Math.round(weight * (goal === "gain" ? 2.0 : 1.8));
    const fat = Math.round((target * 0.25) / 9);
    const carbs = Math.round((target - protein * 4 - fat * 9) / 4);
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), target, protein, carbs, fat });
  };

  const goalLink = useMemo(
    () => (goal === "lose" ? "/fat-loss" : goal === "gain" ? "/muscle-gain" : null),
    [goal]
  );

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-card shadow-card-elev">
        <h3 className="font-display text-2xl mb-6">Your Details</h3>
        <div className="space-y-5">
          <div>
            <Label className="mb-2 block">Sex</Label>
            <RadioGroup
              value={sex}
              onValueChange={(v) => setSex(v as "male" | "female")}
              className="flex gap-6"
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="male" id="male" /> Male
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="female" id="female" /> Female
              </label>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" value={age} onChange={(e) => setAge(+e.target.value)} />
            </div>
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input id="height" type="number" value={height} onChange={(e) => setHeight(+e.target.value)} />
            </div>
            <div>
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(+e.target.value)} />
            </div>
          </div>

          <div>
            <Label className="mb-2 block">Activity Level</Label>
            <Select value={activity} onValueChange={(v) => setActivity(v as keyof typeof activityFactors)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(activityFactors).map(([k, { label }]) => (
                  <SelectItem key={k} value={k}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2 block">Your Goal</Label>
            <div className="grid grid-cols-3 gap-2">
              {(["lose", "maintain", "gain"] as Goal[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGoal(g)}
                  className={`px-3 py-3 rounded-md border text-sm font-semibold transition-all ${
                    goal === g
                      ? "border-primary bg-primary/15 text-primary shadow-glow"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {g === "lose" ? "Lose Fat" : g === "gain" ? "Gain Muscle" : "Maintain"}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={compute} size="lg" className="w-full bg-primary-gradient text-primary-foreground hover:opacity-90 shadow-glow">
            Calculate My Calories
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-card shadow-card-elev">
        <h3 className="font-display text-2xl mb-6">Your Daily Plan</h3>
        {!result ? (
          <div className="h-64 flex items-center justify-center text-muted-foreground text-center px-6">
            Fill in your details and hit calculate to see your personalized calorie & macro plan.
          </div>
        ) : (
          <div className="space-y-5">
            <div className="rounded-xl p-6 bg-primary-gradient text-primary-foreground text-center">
              <div className="text-sm uppercase tracking-widest opacity-80">Daily Target</div>
              <div className="text-5xl font-bold font-display mt-1">{result.target}</div>
              <div className="text-sm opacity-90 mt-1">kcal / day</div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Stat label="BMR" value={`${result.bmr} kcal`} />
              <Stat label="TDEE" value={`${result.tdee} kcal`} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Macro label="Protein" value={`${result.protein}g`} />
              <Macro label="Carbs" value={`${result.carbs}g`} />
              <Macro label="Fats" value={`${result.fat}g`} />
            </div>
            {goalLink && (
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={goalLink}>
                  See your {goal === "lose" ? "Fat Loss" : "Muscle Gain"} guide →
                </Link>
              </Button>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-secondary/60 p-3">
      <div className="text-xs uppercase text-muted-foreground tracking-wider">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function Macro({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border p-3 text-center">
      <div className="text-xs uppercase text-muted-foreground tracking-wider">{label}</div>
      <div className="text-xl font-display font-bold text-primary">{value}</div>
    </div>
  );
}
