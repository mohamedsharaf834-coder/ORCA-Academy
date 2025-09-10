import React from "react";
import "./Schedule.css";

const Schedule = ({ student, setPage }) => {
  const formatSession = (value) => {
    if (!value) return "❌";
    return value.toString().trim().toUpperCase() === "TRUE" ? "✅" : "";
  };

  const sessions = [
    "Session 1",
    "Session 2",
    "Session 3",
    "Session 4",
    "Assessment",
    "Session 5",
    "Session 6",
    "Session 7",
    "Session 8",
  ];

  return (
    <div className="schedule-container">
      {/* Header */}
      <div className="schedule-header">
        <img src="/ORCA.png" alt="ORCA Logo" className="schedule-logo" />
        <button className="logout-btn" onClick={() => setPage("home")}>
          Logout
        </button>
      </div>

      {/* Student Info */}
      <div className="student-info">
        <h2>{student.Name} 🏊</h2>
        <p><b>Age:</b> {student.Age}</p>
        <p><b>Level:</b> {student.Level}</p>
        <p><b>Captain:</b> {student.Captain}</p>
        <p><b>Day:</b> {student.Day}</p>
        <p><b>Hours:</b> {student.Hours}</p>
        <p><b>Branch:</b> {student.Branch}</p>
      </div>

      {/* Sessions Grid */}
      <h3 className="sessions-title">Your Sessions</h3>
      <div className="sessions-grid">
        {sessions.map((s, i) => (
          <div key={i} className="session-card">
            <span>{s}</span>
            <span>
  {s === "Assessment" ? student[s] || "No Result" : formatSession(student[s])}
</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
