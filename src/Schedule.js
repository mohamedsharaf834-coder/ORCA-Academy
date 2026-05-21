import React from "react";
import "./Schedule.css";

const Schedule = ({ student, setPage }) => {
  if (!student) {
    return (
      <div className="schedule-container">
        <p style={{ textAlign: "center", color: "red" }}>خطأ: لم يتم العثور على بيانات الطالب</p>
      </div>
    );
  }

  const formatSession = (value) => {
    if (!value) return "❌";
    return value.toString().trim().toUpperCase() === "TRUE" ? "✅" : "❌";
  };

  const safeValue = (value, defaultValue = "N/A") => {
    return value && value.toString().trim() !== "" ? value : defaultValue;
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
          تسجيل خروج
        </button>
      </div>

      {/* Student Info */}
      <div className="student-info">
        <h2>🏊 {safeValue(student.Name, "Student")}</h2>
        <p>
          <b>العمر:</b> {safeValue(student.Age, "غير محدد")}
        </p>
        <p>
          <b>المستوى:</b> {safeValue(student.Level, "غير محدد")}
        </p>
        <p>
          <b>القبطان:</b> {safeValue(student.Captain, "غير محدد")}
        </p>
        <p>
          <b>اليوم:</b> {safeValue(student.Day, "غير محدد")}
        </p>
        <p>
          <b>الساعات:</b> {safeValue(student.Hours, "غير محدد")}
        </p>
        <p>
          <b>الفرع:</b> {safeValue(student.Branch, "غير محدد")}
        </p>
      </div>

      {/* Sessions Grid */}
      <h3 className="sessions-title">جلساتك 📋</h3>
      <div className="sessions-grid">
        {sessions.map((s, i) => (
          <div key={i} className="session-card">
            <span>{s}</span>
            <span>
              {s === "Assessment"
                ? safeValue(student[s], "بدون نتيجة")
                : formatSession(student[s])}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
