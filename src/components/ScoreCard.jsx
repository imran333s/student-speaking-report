import React from "react";

const ScoreCard = ({ score }) => {
  return (
    <div className="score-card">
      <h2>Overall Speaking Score</h2>
      <p className="overall-score">{score} / 9</p>
    </div>
  );
};

export default ScoreCard;
