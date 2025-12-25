import reportData from "./data/reportData";
import SkillBar from "./components/SkillBar";
import DescriptiveFeedback from "./components/DescriptiveFeedback";
import speechaceLogo from "./assets/speechace-logo.webp";

function App() {
  const { overallScore, skills } = reportData;

  return (
    <div className="page">

      {/* 🔹 TOP REPORT TITLE (NEW) */}
      <div className="top-title">
        SpeechAce Speaking Tests Report
      </div>

      {/* EXISTING HEADER */}
      <header className="header">
        <div>
          <h2>Md Imran</h2>
          <p className="date">Dec 25, 2025</p>
        </div>
        <div className="logo">
          <img src={speechaceLogo} alt="SpeechAce Logo" />
        </div>
      </header>

      <h3 className="section-title">Summary of scores</h3>

      <div className="summary">
        {/* LEFT SCORE CARD */}
        <div className="score-card">
          <div className="score-header">SpeechAce</div>
          <div className="score-body">
            <span>{overallScore}</span>
            <small>/9</small>
          </div>
        </div>

        {/* RIGHT SKILLS */}
        <div className="skills">
          <SkillBar label="Pronunciation" score={skills.pronunciation} />
          <SkillBar label="Fluency" score={skills.fluency} />
          <SkillBar label="Vocabulary" score={skills.vocabulary} />
          <SkillBar label="Grammar" score={skills.grammar} />
        </div>
      </div>

      <DescriptiveFeedback overallScore={overallScore} skills={skills} />
    </div>
  );
}

export default App;
