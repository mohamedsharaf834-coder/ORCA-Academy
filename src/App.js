// src/App.js
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css"; // لو حابب تستخدم CSS خارجي

// ----- Home Page -----
function Home({ onStart }) {
  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <button className="nav-btn" onClick={onStart}>
          Login
        </button>
      </div>

      <div className="home-content">
        <img src="/ORCA.png" alt="ORCA Logo" className="logo-large" />
        <h1>ORCA Swimming Academy</h1>
        <p>
          Welcome to ORCA Academy 🏊‍♂️ <br />
          Learn, train, and achieve excellence in swimming with our professional
          coaches and tailored programs.
        </p>
        <button className="get-started-btn" onClick={onStart}>
          Get Started
        </button>
      </div>
    </div>
  );
}

// ----- Login Page -----
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
    <div className="login-container">
      <img src="/ORCA.png" alt="ORCA Logo" className="logo-small" />
      <h1>LOGIN</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="login-input"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        className="login-input"
      />
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
    </div>
  );
}

// ----- Main App -----
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
