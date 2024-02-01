function Feedback({ good, neutral, bad, totalFeedback }) {
  return (
    <ul>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {totalFeedback}</span>
      </li>
      <li>
        <span>
          Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%
        </span>
      </li>
    </ul>
  );
}

export default Feedback;
