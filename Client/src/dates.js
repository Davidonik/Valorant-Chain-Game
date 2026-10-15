// "YYYY-MM-DD" in the player's own timezone - the Daily Challenge follows it.
// offsetDays: -1 = yesterday
export function localDate(d = new Date(), offsetDays = 0) {
  const day = new Date(d.getFullYear(), d.getMonth(), d.getDate() + offsetDays);
  const mm = String(day.getMonth() + 1).padStart(2, "0");
  const dd = String(day.getDate()).padStart(2, "0");
  return `${day.getFullYear()}-${mm}-${dd}`;
}
