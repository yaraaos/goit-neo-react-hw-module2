import css from "./Options.module.css";

const Options = ({ options, updateFeedback, totalFeedback, handleReset }) => {
  return (
    <>
      <ul className={css.options}>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <button
                className={css.btn}
                onClick={() => updateFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
        {totalFeedback !== 0 && (
          <li>
            <button className={css.btn} onClick={handleReset}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;