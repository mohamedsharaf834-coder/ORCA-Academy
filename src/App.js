// src/App.js
import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css";

function Home({ onStart, setPage }) {
  const galleryImages = [
    "/training1.JPG",
    "/training2.JPG",
    "/training3.JPG",
  ];

  const activities = [
    { img: "/activity1.jpg", title: "Kids Swimming", desc: "Special programs for kids with professional trainers." },
    { img: "/activity2.jpg", title: "Adults Swimming", desc: "Skill and fitness development for adults in a safe environment." },
    { img: "/activity3.jpg", title: "Championships", desc: "Organizing swimming championships all year round." },
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

  useEffect(() => {
    fetch("/data/students.csv")
      .then(res => res.text())
      .then(csvText => {
        const results = Papa.parse(csvText, { header: true });
        setStudents(results.data);
      });
  }, []);

  const handleLogin = () => {
    const found = students.find(
      s =>
        s?.Name?.trim().toLowerCase() === name.trim().toLowerCase() &&
        s?.["phone number"]?.trim() === phone.trim()
    );
    if (!found) return alert("Data not found ❌");
    onLogin(found);
  };

 return (
  <div className="login-container">
    <button className="nav-btn back-btn" onClick={() => setPage("home")}>
      ← Back to Home
    </button>
    <div className="login-box fade-in">
      <img src="/ORCA.png" alt="Logo" className="logo-small" />
      <h1>Member Login</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="login-input"/>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="login-input"/>
      <button onClick={handleLogin} className="login-btn">Login</button>
    </div>
  </div>
);
}


function App() {
  const [page, setPage] = useState("home");
  const [student, setStudent] = useState(null);

  if (page === "schedule" && student) return <Schedule student={student} />;
  if (page === "login") return <Login onLogin={(s) => { setStudent(s); setPage("schedule"); }} setPage={setPage} />;
  return <Home onStart={() => setPage("login")} setPage={setPage} />;
}

export default App;
