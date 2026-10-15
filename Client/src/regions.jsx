import pacificIcon from "./assets/pacific.png";
import chinaIcon from "./assets/china.png";
import emeaIcon from "./assets/emea.png";
import randomIcon from "./assets/random.png";

// value "" = any region; values must match the keys in Server/starters.js.
// To use images, replace an icon with <img src={...} alt="" /> (imported from src/assets).
export const REGIONS = [
  { value: "",         label: "Random",   icon: <img src={randomIcon} alt="" /> },
  { value: "Americas", label: "Americas", icon: "🌎" },
  { value: "EMEA",     label: "EMEA",     icon: <img src={emeaIcon} alt="" /> },
  { value: "Pacific",  label: "Pacific",  icon: <img src={pacificIcon} alt="" /> },
  { value: "China",    label: "China",    icon: <img src={chinaIcon} alt="" /> },
];

export function regionFor(value) {
  return REGIONS.find((r) => r.value === (value ?? "")) ?? REGIONS[0];
}
