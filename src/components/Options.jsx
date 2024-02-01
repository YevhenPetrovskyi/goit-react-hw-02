function Options({ addFeedback, totalFeedback, resetFeedback }) {
  return (
    <div className="options">
      <button onClick={() => addFeedback('good')}>Good</button>
      <button onClick={() => addFeedback('neutral')}>Neutral</button>
      <button onClick={() => addFeedback('bad')}>Bad</button>
      {!!totalFeedback && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}

export default Options;
