import { useState } from 'react';
import './App.css';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const scores = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : scores;
  });

  // eslint-disable-next-line no-undef
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const percent = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedback(scores);
  };

  return (
    <>
      <Description />
      <Options
        options={Object.keys(scores)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          scores={feedback}
          totalFeedback={totalFeedback}
          percent={percent}
        />
      )}
    </>
  );
}

export default App;
