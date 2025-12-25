import { getFeedbackText } from "../utils/feedbackLogic";
import { getScoreColor } from "../utils/scoreColor";

const DescriptiveFeedback = ({ overallScore, skills }) => {
  return (
    <div className="feedback-section">
      <h3>Descriptive feedback</h3>

      <div className="feedback-item">
        <strong>
          Overall (<span style={{ color: getScoreColor(overallScore) }}>
            {overallScore}
          </span>)
        </strong>
        <p>{getFeedbackText(overallScore)}</p>
      </div>

      <div className="feedback-item">
        <strong>
          Pronunciation (<span style={{ color: getScoreColor(skills.pronunciation) }}>
            {skills.pronunciation}
          </span>)
        </strong>
        <p>{getFeedbackText(skills.pronunciation)}</p>
      </div>

      <div className="feedback-item">
        <strong>
          Fluency (<span style={{ color: getScoreColor(skills.fluency) }}>
            {skills.fluency}
          </span>)
        </strong>
        <p>{getFeedbackText(skills.fluency)}</p>
      </div>

      <div className="feedback-item">
        <strong>
          Vocabulary (<span style={{ color: getScoreColor(skills.vocabulary) }}>
            {skills.vocabulary}
          </span>)
        </strong>
        <p>{getFeedbackText(skills.vocabulary)}</p>
      </div>

      <div className="feedback-item">
        <strong>
          Grammar (<span style={{ color: getScoreColor(skills.grammar) }}>
            {skills.grammar}
          </span>)
        </strong>
        <p>{getFeedbackText(skills.grammar)}</p>
      </div>
    </div>
  );
};

export default DescriptiveFeedback;
