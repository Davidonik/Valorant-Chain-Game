// HP bar — one heart per life. To use images, swap the ♥ for
// <img src={full ? heartFull : heartEmpty} alt="" /> (imported from src/assets).
export default function Hearts({ lives, maxLives }) {
  return (
    <div className="hearts" aria-label={`${lives} of ${maxLives} lives left`}>
      {Array.from({ length: maxLives }, (_, i) => {
        const full = i < lives;
        return (
          <span key={i} className={`heart ${full ? "full" : "empty"}`}>
            ♥
          </span>
        );
      })}
    </div>
  );
}
