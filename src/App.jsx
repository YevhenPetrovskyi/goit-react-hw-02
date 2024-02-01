import { useState, useMemo } from 'react';

import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';

import './App.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedbackHandler = (key) => {
    setFeedback({ ...feedback, [key]: feedback[key] + 1 });
  };

  const resetFeedbackHandler = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = useMemo(() => {
    let sum = 0;
    for (const key in feedback) {
      sum += feedback[key];
    }
    return sum;
  }, [feedback]);

  console.log(totalFeedback);

  return (
    <div className="App">
      <Description />
      <Options
        addFeedback={addFeedbackHandler}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedbackHandler}
      />
      {!totalFeedback ? (
        <p>No feedback yet</p>
      ) : (
        <Feedback {...feedback} totalFeedback={totalFeedback} />
      )}
    </div>
  );
}

export default App;
