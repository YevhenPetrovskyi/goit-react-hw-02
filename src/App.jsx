import { useState, useMemo, useEffect } from 'react';

import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';
import Notification from './components/Notification';

import './App.css';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');

    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

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

  return (
    <div className="App">
      <Description />
      <Options
        addFeedback={addFeedbackHandler}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedbackHandler}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback {...feedback} totalFeedback={totalFeedback} />
      )}
    </div>
  );
}

export default App;
