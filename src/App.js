// src/App.js
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css";

// ----- Home Page -----
function Home({ onStart }) {
  return (
    <div className="home-container" style={{ minHeight: "100vh", boxSizing: "border-box", overflowX: "hidden" }}>
      {/* Topbar */}
      <div
        className="topbar"
        style={{
          width: "100%",
          padding: "10px 0",
          background: "#00796b",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          flexWrap: "wrap",
        }}
      >
        <button className="nav-btn" style={{
          background: "rgba(255,255,255,0.10)",
          color: "#fff",
          border: "none",
          borderRadius: "16px",
          padding: "8px 20px",
          fontSize: "17px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s",
          minWidth: "100px"
        }}
        onMouseOver={e => (e.target.style.background = "#009688")}
        onMouseOut={e => (e.target.style.background = "rgba(255,255,255,0.10)")}
        >About</button>
        <button className="nav-btn" style={{
          background: "rgba(255,255,255,0.10)",
          color: "#fff",
          border: "none",
          borderRadius: "16px",
          padding: "8px 20px",
          fontSize: "17px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s",
          minWidth: "100px"
        }}
        onMouseOver={e => (e.target.style.background = "#009688")}
        onMouseOut={e => (e.target.style.background = "rgba(255,255,255,0.10)")}
        >Courses</button>
        <button className="nav-btn" style={{
          background: "rgba(255,255,255,0.10)",
          color: "#fff",
          border: "none",
          borderRadius: "16px",
          padding: "8px 20px",
          fontSize: "17px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s",
          minWidth: "100px"
        }}
        onMouseOver={e => (e.target.style.background = "#009688")}
        onMouseOut={e => (e.target.style.background = "rgba(255,255,255,0.10)")}
        >Contact</button>
      </div>

      {/* Navbar */}
      <div className="navbar" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "20px 0",
        gap: "10px"
      }}>
        <button className="nav-btn" onClick={onStart}>
          Login
        </button>
        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
          style={{ background: "#25D366", color: "#fff" }}
        >
          WhatsApp
        </a>
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
          style={{
            background: "#1877f3",
            color: "#fff",
            maxWidth: "120px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          Facebook
        </a>
      </div>

      <div className="home-content">
        <img src="/ORCA2.png" alt="ORCA Logo" className="logo-large" />
        <h1>ORCA Swimming Academy</h1>
        <p>
          Welcome to ORCA Academy 🏊‍♂️ <br />
          Learn, train, and achieve excellence in swimming with our professional
          coaches and tailored programs.
        </p>
        <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
          للتواصل: 01012201021 - 01122334455
        </div>
        <button className="get-started-btn" onClick={onStart}>
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: "40px",
        padding: "15px 0",
        background: "#004d40",
        color: "#fff",
        width: "100%",
        textAlign: "center",
        borderRadius: "12px",
        fontSize: "16px"
      }}>
        &copy; {new Date().getFullYear()} ORCA Swimming Academy. جميع الحقوق محفوظة.
      </footer>
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
      <img src="/ORCA2.png" alt="ORCA Logo" className="logo-small" />
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
