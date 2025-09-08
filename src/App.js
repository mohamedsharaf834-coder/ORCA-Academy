// src/App.js
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";

// Home Page
function Home({ onStart }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #004d40, #00796b)",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        padding: "20px",
        position: "relative"
      }}
    >
      {/* Navbar */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px 40px",
        backgroundColor: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(5px)",
      }}>
        <button
          onClick={onStart}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffcc00",
            color: "#004d40",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e6b800")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ffcc00")}
        >
          Login
        </button>
      </div>

      <img
        src="/ORCA.png"
        alt="ORCA Logo"
        style={{
          width: "200px",
          marginBottom: "20px",
          borderRadius: "50%",
          boxShadow: "0 5px 25px rgba(0,0,0,0.4)",
        }}
      />
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        ORCA Swimming Academy
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "30px", maxWidth: "600px" }}>
        Welcome to ORCA Academy 🏊‍♂️ <br />
        Learn, train, and achieve excellence in swimming with our professional
        coaches and tailored programs.
      </p>
      <button
        onClick={onStart}
        style={{
          padding: "15px 40px",
          backgroundColor: "#ffcc00",
          color: "#004d40",
          border: "none",
          borderRadius: "12px",
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e6b800")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ffcc00")}
      >
        Get Started
      </button>
    </div>
  );
}

// Login Page
function Login({ onLogin }) {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("/data/students.csv")
      .then((res) => res.text())
      .then((csvText) => {
        const results = Papa.parse(csvText, { header: true });
        setStudents(results.data);
      });
  }, []);

  const handleLogin = () => {
    const found = students.find(
      (s) =>
        s?.Name?.trim().toLowerCase() === name.trim().toLowerCase() &&
        s?.["phone number"]?.trim() === phone.trim()
    );
    if (!found) return alert("Data not found ❌");
    onLogin(found);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
      }}
    >
      <img
        src="/ORCA.png"
        alt="ORCA Swimming Academy"
        style={{
          width: "120px",
          marginBottom: "25px",
          borderRadius: "50%",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      />
      <h1 style={{ marginBottom: "25px", color: "#00796b", fontSize: "28px" }}>
        LOGIN
      </h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        style={{
          padding: "12px",
          marginBottom: "15px",
          width: "280px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#00796b")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        style={{
          padding: "12px",
          marginBottom: "20px",
          width: "280px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#00796b")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: "12px 25px",
          backgroundColor: "#00796b",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#004d40")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#00796b")}
      >
        Login
      </button>
    </div>
  );
}

// Main App
function App() {
  const [page, setPage] = useState("home");
  const [student, setStudent] = useState(null);

  if (page === "schedule" && student) return <Schedule student={student} />;
  if (page === "login")
    return (
      <Login
        onLogin={(s) => {
          setStudent(s);
          setPage("schedule");
        }}
      />
    );
  return <Home onStart={() => setPage("login")} />;
}

export default App;
