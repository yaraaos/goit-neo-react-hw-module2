/* eslint-disable react/prop-types */
import css from "./Feedback.module.css";

const Feedback = ({ scores, totalFeedback, percent }) => {
  let scoreKey = Object.keys(scores);

  return (
    <ul className={css.list}>
      {scoreKey.map((score, index) => {
        return (
          <li key={index}>
            <p>
              {score}: {scores[score]}
            </p>
          </li>
        );
      })}
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {percent}%</p>
      </li>
    </ul>
  );
};

export default Feedback;