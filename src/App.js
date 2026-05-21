// src/App.js
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css";
import SignupForm from "./SignupForm";
import { CONFIG, validateName, validatePhone } from "./config";




function Home({ onStart, setPage }) {
  const activities = [
    { img: "/Kids.JPG", title: "Kids Swimming", desc: "Special programs for kids with professional trainers." },
    { img: "/Adult.JPG", title: "Adults Swimming", desc: "Skill and fitness development for adults in a safe environment." },
    { img: "/Championships.JPG", title: "Championships", desc: "Organizing swimming championships all year round." },
  ];

  return (
    <div className="home-container">
      {/* Topbar */}
      <div className="topbar">
        <a href="#about" className="nav-btn">About</a>
        <a href="#gallery" className="nav-btn">Gallery</a>
        <a href="#activities" className="nav-btn">Activities</a>
        <a href="#contact" className="nav-btn">Contact</a>
        <button className="nav-btn member-btn" onClick={() => setPage("login")}>
          My Classes (Members)
        </button>
      </div>

      {/* Logo */}
      <div className="home-logo">
        <img src="/ORCA2.png" alt="ORCA Logo" className="logo-large"/>
      </div>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h1>ORCA Swimming Academy</h1>
        <p>
          Welcome to ORCA Academy 🏊‍♂️<br />
          Learn, train, and achieve excellence in swimming with professional coaches and modern programs for all ages.
        </p>
        <button className="get-started-btn" onClick={onStart}>Login</button>
      </section>
      {/* Signup Section */}
<section id="signup" className="section">
  <h2>Register Your Child</h2>
  <SignupForm />
</section>


      {/* Gallery Section */}
<section id="gallery" className="section">
  <h2>Training Gallery</h2>
  <div className="gallery-grid">
    <img src="/training1.JPG" alt="Training 1" />
    <img src="/training2.JPG" alt="Training 2" />
    <img src="/training3.JPG" alt="Training 3" />
  </div>
</section>


      {/* Activities Section */}
      <section id="activities" className="section">
        <h2>Academy Activities</h2>
        <div className="activities-grid">
          {activities.map((act, idx) => (
            <div key={idx} className="activity-card">
              <img src={act.img} alt={act.title}/>
              <h3>{act.title}</h3>
              <p>{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <a href="https://wa.me/201012201021" target="_blank" rel="noopener noreferrer" className="nav-btn whatsapp-btn">WhatsApp</a>
        <a href="https://www.facebook.com/profile.php?id=61578271988798" target="_blank" rel="noopener noreferrer" className="nav-btn fb-btn">Facebook</a>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} ORCA Swimming Academy. All rights reserved.
      </footer>
    </div>
  );
}
function Login({ onLogin, setPage }) {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(CONFIG.STUDENTS_DATA_PATH);
        if (!res.ok) {
          throw new Error(CONFIG.ERRORS.NETWORK_ERROR);
        }
        const csvText = await res.text();
        const results = Papa.parse(csvText, { header: true });
        if (!results.data || results.data.length === 0) {
          throw new Error("لم يتم تحميل بيانات الطلاب");
        }
        setStudents(results.data);
      } catch (err) {
        setError(err.message || CONFIG.ERRORS.SERVER_ERROR);
        console.error("Error loading students:", err);
      } finally {
        setLoading(false);
      }
    };
    loadStudents();
  }, []);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError(validatePhone(value));
  };

  const handleLogin = async () => {
    // Validate inputs
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    
    setNameError(nameErr);
    setPhoneError(phoneErr);
    
    if (nameErr || phoneErr) {
      return;
    }

    try {
      setLoginLoading(true);
      setError(null);

      const found = students.find(
        s =>
          s?.Name?.trim().toLowerCase() === name.trim().toLowerCase() &&
          s?.["phone number"]?.trim() === phone.trim()
      );

      if (!found) {
        setError(CONFIG.ERRORS.LOGIN_FAILED);
        return;
      }

      onLogin(found);
    } catch (err) {
      setError(CONFIG.ERRORS.SERVER_ERROR);
      console.error("Login error:", err);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loginLoading) {
      handleLogin();
    }
  };

  if (loading) {
    return (
      <div className="login-container">
        <div className="login-box fade-in">
          <p style={{ fontSize: "18px", color: "#009688" }}>جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box fade-in">
        <button className="back-btn" onClick={() => setPage("home")} disabled={loginLoading}>
          ← الرجوع للرئيسية
        </button>
        <img src="/ORCA.png" alt="Logo" className="logo-small" />

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div>
          <input
            value={name}
            onChange={handleNameChange}
            onKeyPress={handleKeyPress}
            placeholder="الاسم"
            className="login-input"
            disabled={loginLoading}
          />
          {nameError && <span className="input-error">{nameError}</span>}
        </div>

        <div>
          <input
            value={phone}
            onChange={handlePhoneChange}
            onKeyPress={handleKeyPress}
            placeholder="رقم الهاتف"
            className="login-input"
            disabled={loginLoading}
          />
          {phoneError && <span className="input-error">{phoneError}</span>}
        </div>

        <button 
          className="login-btn" 
          onClick={handleLogin}
          disabled={loginLoading || !!nameError || !!phoneError}
        >
          {loginLoading ? "جاري الدخول..." : "دخول"}
        </button>
      </div>
    </div>
  );
}


function App() {
  const [page, setPage] = useState("home");
  const [student, setStudent] = useState(null);

  const handleLogin = (studentData) => {
    setStudent(studentData);
    setPage("schedule");
  };

  return (
    <>
      {page === "home" && <Home onStart={() => setPage("login")} setPage={setPage} />}
      {page === "login" && <Login onLogin={handleLogin} setPage={setPage} />}
      {page === "schedule" && <Schedule student={student} setPage={setPage} />}
    </>
  );
}

export default App;
