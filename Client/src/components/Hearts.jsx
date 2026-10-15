import redIcon from "../assets/red-heart.png";
import greyIcon from "../assets/grey-heart.png";

// HP bar — red heart per life left, grey heart per life lost
export default function Hearts({ lives, maxLives }) {
  return (
    <div className="hearts" aria-label={`${lives} of ${maxLives} lives left`}>
      {Array.from({ length: maxLives }, (_, i) => {
        const full = i < lives;
        return (
          <img
            key={i}
            className={`heart ${full ? "full" : "empty"}`}
            src={full ? redIcon : greyIcon}
            alt=""
          />
        );
      })}
    </div>
  );
}
