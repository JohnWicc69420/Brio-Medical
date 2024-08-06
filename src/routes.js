import Home from "./Home.svelte";
import Team from "./Team.svelte";
import Conditions from "./Conditions.svelte";
import Treatments from "./Treatments.svelte";
import Testimonials from "./Testimonials.svelte";
import About from "./About.svelte";
import Resources from "./Resources.svelte";

export const routes = {
  "/": Home,
  "/about": About,
  "/team": Team,
  "/conditions": Conditions,
  "/treatments": Treatments,
  "/testimonials": Testimonials,
  "/resources": Resources,
};
