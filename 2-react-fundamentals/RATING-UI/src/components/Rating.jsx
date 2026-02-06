import { use, useState } from "react";

const Rating = ({
  heading = "Rate your experience",
  color = "gold",
  feedbackMessages = ["terrible", "poor", "fair", "good,", "exellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div style={styles.container}>
      <h2>Rate your experience</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            key={star}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
              color: star <= (hover || rating) ? color : "#ccc",
            }}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
      {/* conditional rendering*/}
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

const styles = {
  container: {
    margin: "auto",
    padding: "50px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  heading: { color: "red" },
};

export default Rating;
