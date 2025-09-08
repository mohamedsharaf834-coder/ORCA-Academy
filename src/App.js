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
        background: "linear-gradient(135deg, #004d40 0%, #0d2f2f 100%)",
        boxSizing: "border-box",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Topbar */}
      <div
        className="topbar"
        style={{
          width: "100%",
          padding: "16px 0",
          background: "rgba(0, 121, 107, 0.95)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          gap: "36px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          boxShadow: "0 2px 12px #00251a",
          borderBottomLeftRadius: "18px",
          borderBottomRightRadius: "18px",
          backdropFilter: "blur(3px)",
        }}
      >
        <a href="#about" className="nav-btn" style={{
          color: "#fff",
          fontWeight: "500",
          textDecoration: "none",
          fontSize: "19px",
          letterSpacing: "1px",
          padding: "8px 28px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.08)",
          transition: "background 0.2s",
        }}>About</a>
        <a href="#gallery" className="nav-btn" style={{
          color: "#fff",
          fontWeight: "500",
          textDecoration: "none",
          fontSize: "19px",
          letterSpacing: "1px",
          padding: "8px 28px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.08)",
          transition: "background 0.2s",
        }}>Gallery</a>
        <a href="#activities" className="nav-btn" style={{
          color: "#fff",
          fontWeight: "500",
          textDecoration: "none",
          fontSize: "19px",
          letterSpacing: "1px",
          padding: "8px 28px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.08)",
          transition: "background 0.2s",
        }}>Activities</a>
        <a href="#contact" className="nav-btn" style={{
          color: "#fff",
          fontWeight: "500",
          textDecoration: "none",
          fontSize: "19px",
          letterSpacing: "1px",
          padding: "8px 28px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.08)",
          transition: "background 0.2s",
        }}>Contact</a>
      </div>

      {/* Logo Centered */}
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "140px", // تم زيادة المسافة من فوق
        marginBottom: "30px"
      }}>
        <img src="/ORCA2.png" alt="ORCA Logo"
          style={{
            maxWidth: "180px",
            width: "100%",
            boxShadow: "0 4px 24px #00332c",
            borderRadius: "50%",
            background: "rgba(0,77,64,0.7)", // خلفية غامقة شفافة بدل الأبيض
            padding: "18px"
          }}
        />
      </div>

      {/* About Section */}
      <div id="about" style={{
        textAlign: "center",
        padding: "32px 18px 24px",
        background: "rgba(0,121,107,0.15)",
        borderRadius: "18px",
        maxWidth: "700px",
        margin: "0 auto 40px",
        boxShadow: "0 2px 12px #00251a"
      }}>
        <h1 style={{ color: "#fff", fontSize: "36px", marginBottom: "18px", letterSpacing: "2px" }}>ORCA Swimming Academy</h1>
        <p style={{ fontSize: "20px", color: "#b2dfdb", marginBottom: "18px", lineHeight: "1.7" }}>
          Welcome to ORCA Academy 🏊‍♂️<br />
          Learn, train, and achieve excellence in swimming with professional coaches and modern programs for all ages.
        </p>
        <button className="get-started-btn" onClick={onStart}
          style={{
            background: "#009688",
            color: "#fff",
            borderRadius: "24px",
            padding: "12px 36px",
            fontSize: "19px",
            fontWeight: "bold",
            border: "none",
            marginTop: "10px",
            boxShadow: "0 2px 8px #004d40",
            cursor: "pointer"
          }}>
          Login
        </button>
      </div>

      {/* Gallery Section */}
      <div id="gallery" style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto 40px",
        textAlign: "center",
        background: "rgba(0,121,107,0.10)",
        borderRadius: "18px",
        padding: "28px 0",
        boxShadow: "0 2px 12px #00251a"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#fff", fontSize: "28px" }}>Training Gallery</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <img src="/training1.JPG" alt="Training 1" style={{ width: "220px", borderRadius: "14px", boxShadow: "0 2px 8px #004d40" }} />
          <img src="/training2.JPG" alt="Training 2" style={{ width: "220px", borderRadius: "14px", boxShadow: "0 2px 8px #004d40" }} />
          <img src="/training3.JPG" alt="Training 3" style={{ width: "220px", borderRadius: "14px", boxShadow: "0 2px 8px #004d40" }} />
        </div>
      </div>

      {/* Activities Section */}
      <div id="activities" style={{
        background: "rgba(0,121,107,0.10)",
        borderRadius: "18px",
        maxWidth: "900px",
        margin: "0 auto 40px",
        padding: "28px 0",
        boxShadow: "0 2px 12px #00251a"
      }}>
        <h2 style={{ color: "#fff", fontSize: "28px", marginBottom: "20px" }}>Academy Activities</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <div style={{ width: "260px", background: "#fff", borderRadius: "14px", boxShadow: "0 2px 8px #004d40", padding: "15px" }}>
            <img src="/activity1.jpg" alt="Kids Training" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
            <h3 style={{ color: "#00796b", fontSize: "20px" }}>Kids Swimming</h3>
            <p style={{ color: "#004d40", fontSize: "15px" }}>Special programs for kids with professional trainers.</p>
          </div>
          <div style={{ width: "260px", background: "#fff", borderRadius: "14px", boxShadow: "0 2px 8px #004d40", padding: "15px" }}>
            <img src="/activity2.jpg" alt="Adults Training" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
            <h3 style={{ color: "#00796b", fontSize: "20px" }}>Adults Swimming</h3>
            <p style={{ color: "#004d40", fontSize: "15px" }}>Skill and fitness development for adults in a safe environment.</p>
          </div>
          <div style={{ width: "260px", background: "#fff", borderRadius: "14px", boxShadow: "0 2px 8px #004d40", padding: "15px" }}>
            <img src="/activity3.jpg" alt="Championships" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
            <h3 style={{ color: "#00796b", fontSize: "20px" }}>Championships</h3>
            <p style={{ color: "#004d40", fontSize: "15px" }}>Organizing swimming championships all year round.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto 40px",
        textAlign: "center",
        background: "rgba(0,121,107,0.10)",
        borderRadius: "14px",
        padding: "20px 0",
        boxShadow: "0 2px 12px #00251a"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#fff" }}>Contact Us</h2>
        <a
          href="https://wa.me/201012201021"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
          style={{ background: "#25D366", color: "#fff", margin: "0 10px", borderRadius: "16px", padding: "10px 24px", fontSize: "18px", fontWeight: "500", display: "inline-block" }}
        >
          WhatsApp
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61578271988798"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn"
          style={{ background: "#1877f3", color: "#fff", margin: "0 10px", borderRadius: "16px", padding: "10px 24px", fontSize: "18px", fontWeight: "500", display: "inline-block" }}
        >
          Facebook
        </a>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: "20px",
        padding: "15px 0",
        background: "#00251a",
        color: "#fff",
        width: "100%",
        textAlign: "center",
        borderRadius: "12px",
        fontSize: "16px",
        letterSpacing: "1px"
      }}>
        &copy; {new Date().getFullYear()} ORCA Swimming Academy. All rights reserved.
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
