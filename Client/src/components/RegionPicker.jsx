import { REGIONS } from "../regions";

// Row of clickable region tiles; value "" = random region
export default function RegionPicker({ value, onChange }) {
  return (
    <div className="region-picker" role="radiogroup" aria-label="Region">
      {REGIONS.map((r) => (
        <button
          key={r.label}
          type="button"
          role="radio"
          aria-checked={value === r.value}
          className={`region-option ${value === r.value ? "selected" : ""}`}
          onClick={() => onChange(r.value)}
        >
          <span className="region-icon">{r.icon}</span>
          <span className="region-label">{r.label}</span>
        </button>
      ))}
    </div>
  );
}
