import React from "react";
import './desktop.css';

const Schedule = ({ student }) => {
  const formatSession = (value) => {
    if (!value) return "";
    const val = value.toString().trim().toUpperCase();
    return val === "TRUE" ? "✅" : "";
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "90%",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    backgroundColor: "#ffffff", // خلفية الجدول
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // ظل خفيف للجدول
  };

  const thStyle = {
    backgroundColor: "#b2ebf2",
    padding: "10px",
    border: "1px solid #ddd",
    color: "#00796b",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
    transition: "background-color 0.3s",
  };

  const headerStyle = {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#004d40",
    textAlign: "center",
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#e0f7fa", // خلفية الصفحة
    minHeight: "100vh",
  };

  const handleHover = (e, hover) => {
    e.currentTarget.style.backgroundColor = hover ? "#80deea" : "transparent";
  };

  return (
    <div style={containerStyle}>
      <img
        src="/ORCA.png"
        alt="ORCA Swimming Academy"
        style={{ width: "150px", display: "block", margin: "0 auto 20px auto" }}
      />
      <h2 style={headerStyle}>جدول الحصص للطالب {student.Name}</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            {[
              "Name","Age","Phone","Level","Captain","Day","Branch","Hours",
              "Session 1","Session 2","Session 3","Session 4","Assessment",
              "Session 5","Session 6","Session 7","Session 8"
            ].map((col) => (
              <th key={col} style={thStyle}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {[
              student.Name,
              student.Age,
              student["phone number"],
              student.Level,
              student.Captain,
              student.Day,
              student.Branch,
              student.Hours,
              formatSession(student["Session 1"]),
              formatSession(student["Session 2"]),
              formatSession(student["Session 3"]),
              formatSession(student["Session 4"]),
              formatSession(student.Assessment),
              formatSession(student["Session 5"]),
              formatSession(student["Session 6"]),
              formatSession(student["Session 7"]),
              formatSession(student["Session 8"])
            ].map((value, index) => (
              <td
                key={index}
                style={tdStyle}
                onMouseEnter={e => handleHover(e, true)}
                onMouseLeave={e => handleHover(e, false)}
              >
                {value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
