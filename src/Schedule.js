import React from "react";


const Schedule = ({ student }) => {
  const formatSession = (value) => {
    if (!value) return "";
    return value.toString().trim().toUpperCase() === "TRUE" ? "✅" : "";
  };

  return (
    <div className="schedule-container">
      <img
        src="/ORCA.png"
        alt="ORCA Swimming Academy"
        className="schedule-logo"
      />
      <h2 className="schedule-header">جدول الحصص للطالب {student.Name}</h2>

      <table className="schedule-table">
        <thead>
          <tr>
            {[
              "Name","Age","Phone","Level","Captain","Day","Branch","Hours",
              "Session 1","Session 2","Session 3","Session 4","Assessment",
              "Session 5","Session 6","Session 7","Session 8"
            ].map((col) => (
              <th key={col}>{col}</th>
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
              <td key={index} className="schedule-td">{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
