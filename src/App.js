import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css";
import SignupForm from "./SignupForm";
import { CONFIG, validateName, validatePhone } from "./config";

function Home({ onStart, setPage }) {
  const activities = [
    {
      img: "/Kids.JPG",
      title: "سباحة الأطفال",
      desc: "برامج متخصصة للأطفال مع مدربين محترفين وخبرة عالية.",
      icon: "👶",
    },
    {
      img: "/Adult.JPG",
      title: "سباحة الكبار",
      desc: "تطوير المهارات واللياقة البدنية للكبار في بيئة آمنة وودية.",
      icon: "🏊",
    },
    {
      img: "/Championships.JPG",
      title: "البطولات",
      desc: "تنظيم بطولات سباحة طوال السنة لتطوير المواهب والمهارات.",
      icon: "🏆",
    },
  ];

  const whyOrcaFeatures = [
    {
      title: "مجموعات صغيرة",
      desc: "حد أقصى 4 أطفال في المجموعة لضمان الاهتمام الكامل بكل طفل.",
      icon: "👥",
    },
    {
      title: "تعلم آمن",
      desc: "بيئة ودية وآمنة تساعد الأطفال على الشعور بالثقة في الماء.",
      icon: "🛡️",
    },
    {
      title: "مدربون محترفون",
      desc: "مدربون ذوو خبرة يركزون على التقدم والراحة والنتائج الحقيقية.",
      icon: "🎓",
    },
  ];

  return (
    <div className="home-container">
      <div className="topbar">
        <a href="#about" className="nav-btn">عن الأكاديمية</a>
        <a href="#why" className="nav-btn">لماذا ORCA؟</a>
        <a href="#gallery" className="nav-btn">المعرض</a>
        <a href="#activities" className="nav-btn">الأنشطة</a>
        <a href="#contact" className="nav-btn">تواصل معنا</a>
        <button className="nav-btn member-btn" onClick={() => setPage("login")}>
          فصولي (الأعضاء)
        </button>
      </div>

      <div className="hero-section">
        <div className="home-logo">
          <img src="/ORCA2.png" alt="شعار ORCA" className="logo-large" />
        </div>

        <section id="about" className="section about-section">
          <span className="badge">🌍 مدينة الأقصر، مصر</span>
          <h1 className="hero-title">أكاديمية ORCA للسباحة</h1>
          <p className="main-desc hero-subtitle">
            مرحباً بك في أكاديمية ORCA 🐋
            <br />
            تعلم وتدرب وحقق التميز في السباحة مع مدربين محترفين وبرامج حديثة ومجموعات صغيرة بحد أقصى 4 أطفال للتركيز الأفضل.
          </p>

          <div className="hero-actions">
            <button className="get-started-btn" onClick={onStart}>دخول الأعضاء</button>
            <a href="#signup" className="secondary-link">سجل طفلك الآن</a>
          </div>
        </section>
      </div>

      <section id="why" className="section why-section">
        <h2>لماذا تختار ORCA؟</h2>
        <div className="why-grid">
          {whyOrcaFeatures.map((feature, idx) => (
            <div key={idx} className="info-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="section benefits-section">
        <h2>فوائد السباحة</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">💪</span>
            <h4>تقوية الجسم</h4>
            <p>تطوير العضلات واللياقة البدنية بطريقة آمنة وفعالة.</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🧠</span>
            <h4>تطوير الثقة</h4>
            <p>بناء الثقة بالنفس والشجاعة من خلال تحقيق الإنجازات.</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">😊</span>
            <h4>الصحة النفسية</h4>
            <p>تقليل التوتر والقلق والاستمتاع بنشاط ممتع وصحي.</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎯</span>
            <h4>تحديد الأهداف</h4>
            <p>تعلم كيفية وضع الأهداف والعمل بجد لتحقيقها.</p>
          </div>
        </div>
      </section>

      <section id="signup" className="section">
        <h2>سجل طفلك الآن</h2>
        <p className="section-subtitle">انضم إلى عائلة ORCA واستمتع برحلة تعليمية ممتعة وآمنة</p>
        <SignupForm />
      </section>

      <section id="gallery" className="section">
        <h2>معرض التدريبات</h2>
        <p className="section-subtitle">شاهد لحظات من تدريباتنا المميزة</p>
        <div className="gallery-grid">
          <img src="/training1.JPG" alt="تدريب 1" />
          <img src="/training2.JPG" alt="تدريب 2" />
          <img src="/training3.JPG" alt="تدريب 3" />
        </div>
      </section>

      <section id="activities" className="section">
        <h2>أنشطة الأكاديمية</h2>
        <div className="activities-grid">
          {activities.map((act, idx) => (
            <div key={idx} className="activity-card">
              <div className="activity-icon">{act.icon}</div>
              <img src={act.img} alt={act.title} />
              <h3>{act.title}</h3>
              <p>{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>تواصل معنا</h2>
        <p className="contact-text">
          تواصل معنا مباشرة عبر WhatsApp أو Facebook للحصول على إجابات سريعة والحجز.
        </p>
        <div className="contact-links">
          <a
            href="https://wa.me/201012201021"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn whatsapp-btn"
          >
            💬 WhatsApp
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61578271988798"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn fb-btn"
          >
            📘 Facebook
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} أكاديمية ORCA للسباحة. جميع الحقوق محفوظة.</p>
          <p className="footer-location">📍 الأقصر، مصر</p>
        </div>
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
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);

    setNameError(nameErr);
    setPhoneError(phoneErr);

    if (nameErr || phoneErr) return;

    try {
      setLoginLoading(true);
      setError(null);

      const found = students.find(
        (s) =>
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
    if (e.key === "Enter" && !loginLoading) handleLogin();
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

        <img src="/ORCA.png" alt="شعار" className="logo-small" />

        {error && <div className="error-message">{error}</div>}

        <div>
          <input
            value={name}
            onChange={handleNameChange}
            onKeyDown={handleKeyPress}
            placeholder="اسم الطالب"
            className="login-input"
            disabled={loginLoading}
          />
          {nameError && <span className="input-error">{nameError}</span>}
        </div>

        <div>
          <input
            value={phone}
            onChange={handlePhoneChange}
            onKeyDown={handleKeyPress}
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
