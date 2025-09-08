// src/App.js
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css";

// ----- Home Page -----
function Home({ onStart }) {
  return (
    <div className="home-container" style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #e0f7fa, #ffffff)" }}>
      {/* Topbar ثابت فوق */}
      <div
        className="topbar"
        style={{
          width: "100%",
          padding: "12px 0",
          background: "#00796b",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          boxShadow: "0 2px 8px #ccc"
        }}
      >
        <a href="#about" className="nav-btn" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>عن الأكاديمية</a>
        <a href="#gallery" className="nav-btn" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>صور التدريب</a>
        <a href="#activities" className="nav-btn" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>الأنشطة</a>
        <a href="#contact" className="nav-btn" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>تواصل معنا</a>
      </div>

      {/* محتوى الصفحة */}
      <div style={{ marginTop: "80px" }}>
        {/* Hero Section */}
        <div id="about" style={{ textAlign: "center", padding: "40px 10px 20px", background: "#e0f7fa", borderRadius: "16px", maxWidth: "800px", margin: "0 auto 40px" }}>
          <img src="/ORCA2.png" alt="ORCA Logo" style={{ maxWidth: "180px", marginBottom: "20px" }} />
          <h1 style={{ color: "#00796b", fontSize: "38px", marginBottom: "15px" }}>ORCA Swimming Academy</h1>
          <p style={{ fontSize: "20px", color: "#004d40", marginBottom: "20px" }}>
            أكاديمية أوركا للسباحة 🏊‍♂️<br />
            تعلم، تدرب، وحقق التميز مع أفضل المدربين وبرامج تدريبية مخصصة لكل الأعمار والمستويات.
          </p>
          <div style={{ fontWeight: "bold", color: "#00796b", fontSize: "18px", marginBottom: "10px" }}>
            للتواصل: 01012201021
          </div>
          <button className="get-started-btn" onClick={onStart} style={{ background: "#00796b", color: "#fff", borderRadius: "16px", padding: "10px 32px", fontSize: "18px", fontWeight: "bold", border: "none", marginTop: "10px" }}>
            تسجيل الدخول
          </button>
        </div>

        {/* Gallery Section */}
        <div id="gallery" style={{ width: "100%", maxWidth: "900px", margin: "0 auto 40px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px", color: "#00796b", fontSize: "28px" }}>صور من التدريب</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            <img src="/training1.jpg" alt="تدريب 1" style={{ width: "220px", borderRadius: "12px", boxShadow: "0 2px 8px #ccc" }} />
            <img src="/training2.jpg" alt="تدريب 2" style={{ width: "220px", borderRadius: "12px", boxShadow: "0 2px 8px #ccc" }} />
            <img src="/training3.jpg" alt="تدريب 3" style={{ width: "220px", borderRadius: "12px", boxShadow: "0 2px 8px #ccc" }} />
            {/* أضف صور أخرى بنفس الشكل */}
          </div>
        </div>

        {/* Activities Section */}
        <div id="activities" style={{ background: "#e0f7fa", borderRadius: "16px", maxWidth: "900px", margin: "0 auto 40px", padding: "30px 0" }}>
          <h2 style={{ color: "#00796b", fontSize: "28px", marginBottom: "20px" }}>أنشطة الأكاديمية</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            <div style={{ width: "260px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px #ccc", padding: "15px" }}>
              <img src="/activity1.jpg" alt="نشاط 1" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
              <h3 style={{ color: "#00796b", fontSize: "20px" }}>تدريب سباحة للأطفال</h3>
              <p style={{ color: "#004d40", fontSize: "15px" }}>برامج تدريبية مخصصة للأطفال مع مدربين محترفين.</p>
            </div>
            <div style={{ width: "260px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px #ccc", padding: "15px" }}>
              <img src="/activity2.jpg" alt="نشاط 2" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
              <h3 style={{ color: "#00796b", fontSize: "20px" }}>تدريب سباحة للكبار</h3>
              <p style={{ color: "#004d40", fontSize: "15px" }}>تطوير المهارات واللياقة للكبار في بيئة آمنة.</p>
            </div>
            <div style={{ width: "260px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px #ccc", padding: "15px" }}>
              <img src="/activity3.jpg" alt="نشاط 3" style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
              <h3 style={{ color: "#00796b", fontSize: "20px" }}>بطولات ومسابقات</h3>
              <p style={{ color: "#004d40", fontSize: "15px" }}>تنظيم بطولات ومسابقات سباحة على مدار السنة.</p>
            </div>
            {/* أضف أنشطة أخرى بنفس الشكل */}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" style={{ width: "100%", maxWidth: "700px", margin: "0 auto 40px", textAlign: "center", background: "#e0f7fa", borderRadius: "12px", padding: "20px 0", boxShadow: "0 2px 8px #ccc" }}>
          <h2 style={{ marginBottom: "20px", color: "#00796b" }}>تواصل معنا</h2>
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
            style={{ background: "#25D366", color: "#fff", margin: "0 10px", borderRadius: "16px", padding: "10px 24px", fontSize: "18px", fontWeight: "500", display: "inline-block" }}
          >
            WhatsApp
          </a>
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
            style={{ background: "#1877f3", color: "#fff", margin: "0 10px", borderRadius: "16px", padding: "10px 24px", fontSize: "18px", fontWeight: "500", display: "inline-block" }}
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: "20px",
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
