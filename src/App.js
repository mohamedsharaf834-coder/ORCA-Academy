// src/App.js
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css";

// ----- Home Page -----
function Home({ onStart }) {
  return (
    <div
      className="home-container"
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Topbar ثابت فوق */}
      <div
        className="topbar"
        style={{
          width: "100%",
          padding: "10px 0",
          background: "#00796b",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          position: "fixed", // ثابت فوق
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <button className="nav-btn" style={{
          background: "rgba(255,255,255,0.08)",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          padding: "8px 24px",
          fontSize: "18px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        >About</button>
        <button className="nav-btn" style={{
          background: "rgba(255,255,255,0.08)",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          padding: "8px 24px",
          fontSize: "18px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        >Courses</button>
        <button className="nav-btn" style={{
          background: "rgba(255,255,255,0.08)",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          padding: "8px 24px",
          fontSize: "18px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        >Contact</button>
      </div>

      {/* محتوى الصفحة */}
      <div style={{ marginTop: "70px", width: "100%" }}>
        <div className="home-content" style={{ width: "100%", maxWidth: "700px", textAlign: "center", margin: "0 auto" }}>
          <img src="/ORCA2.png" alt="ORCA Logo" className="logo-large" style={{ maxWidth: "220px", width: "100%" }} />
          <h1>ORCA Swimming Academy</h1>
          <p>
            Welcome to ORCA Academy 🏊‍♂️ <br />
            Learn, train, and achieve excellence in swimming with our professional
            coaches and tailored programs.
          </p>
          <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
            للتواصل: 01012201021
          </div>
          <button className="get-started-btn" onClick={onStart}>
            Get Started
          </button>
        </div>

        {/* صور التدريب */}
        <div style={{ width: "100%", maxWidth: "800px", margin: "40px auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px", color: "#00796b" }}>صور من التدريب</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            <img src="/training1.jpg" alt="تدريب 1" style={{ width: "220px", borderRadius: "12px", boxShadow: "0 2px 8px #ccc" }} />
            <img src="/training2.jpg" alt="تدريب 2" style={{ width: "220px", borderRadius: "12px", boxShadow: "0 2px 8px #ccc" }} />
            <img src="/training3.jpg" alt="تدريب 3" style={{ width: "220px", borderRadius: "12px", boxShadow: "0 2px 8px #ccc" }} />
          </div>
        </div>

        {/* جزء التواصل (Contact) */}
        <div style={{ width: "100%", maxWidth: "700px", margin: "40px auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px", color: "#00796b" }}>تواصل معنا</h2>
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
            style={{ background: "#25D366", color: "#fff", margin: "0 10px", borderRadius: "16px", padding: "10px 24px", fontSize: "18px", fontWeight: "500" }}
          >
            WhatsApp
          </a>
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
            style={{ background: "#1877f3", color: "#fff", margin: "0 10px", borderRadius: "16px", padding: "10px 24px", fontSize: "18px", fontWeight: "500" }}
          >
            Facebook
          </a>
        </div>
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
