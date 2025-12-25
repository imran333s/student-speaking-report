import { getScoreColor } from "../utils/scoreColor";

const SkillBar = ({ label, score }) => {
  const percentage = (score / 9) * 100;
  const color = getScoreColor(score);

  return (
    <div className="skill-row">
      <div className="skill-label">
        <span>{label}</span>
        <span style={{ color }}>{score}/9</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
