import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";
import "./App.css";
import SignupForm from "./SignupForm";
import { CONFIG, validateName, validatePhone } from "./config";

const translations = {
  en: {
    nav: {
      about: "About",
      why: "Why ORCA?",
      gallery: "Gallery",
      activities: "Activities",
      contact: "Contact",
      members: "My Classes (Members)",
    },
    hero: {
      location: "Luxor City, Egypt",
      title: "ORCA Swimming Academy",
      subtitle: "Welcome to ORCA Academy 🐋\nLearn, train, and achieve excellence in swimming with professional coaches, modern programs, and small groups of maximum 4 children for better focus.",
      login: "Login",
      register: "Register Your Child",
    },
    why: {
      title: "Why ORCA?",
      features: [
        { title: "Small Groups", desc: "Maximum 4 kids per group to ensure more attention for every child.", icon: "👥" },
        { title: "Safe Learning", desc: "A friendly and secure environment that helps kids feel confident in the water.", icon: "🛡️" },
        { title: "Professional Coaches", desc: "Experienced trainers focused on progress, comfort, and real results.", icon: "🎓" },
      ]
    },
    benefits: {
      title: "Benefits of Swimming",
      items: [
        { title: "Body Strength", desc: "Develop muscles and fitness in a safe and effective way.", icon: "💪" },
        { title: "Confidence", desc: "Build self-confidence and courage through achievements.", icon: "🧠" },
        { title: "Mental Health", desc: "Reduce stress and anxiety while enjoying a healthy activity.", icon: "😊" },
        { title: "Goal Setting", desc: "Learn how to set goals and work hard to achieve them.", icon: "🎯" },
      ]
    },
    signup: {
      title: "Register Your Child",
      subtitle: "Join the ORCA family and enjoy a fun and safe learning journey",
    },
    gallery: {
      title: "Training Gallery",
      subtitle: "Watch moments from our special training sessions",
    },
    activities: {
      title: "Academy Activities",
      items: [
        { title: "Kids Swimming", desc: "Special programs for kids with professional trainers.", icon: "👶" },
        { title: "Adults Swimming", desc: "Skill and fitness development for adults in a safe environment.", icon: "🏊" },
        { title: "Championships", desc: "Organizing swimming championships all year round.", icon: "🏆" },
      ]
    },
    contact: {
      title: "Contact Us",
      text: "Reach us directly through WhatsApp or Facebook for quick responses and booking.",
    },
    footer: {
      rights: "ORCA Swimming Academy. All rights reserved.",
      location: "Luxor, Egypt",
    },
    login: {
      back: "← Back to Home",
      placeholderName: "Student Name",
      placeholderPhone: "Phone Number",
      button: "Login",
      loading: "Logging in...",
      loadingData: "Loading data...",
    }
  },
  ar: {
    nav: {
      about: "عن الأكاديمية",
      why: "لماذا ORCA؟",
      gallery: "المعرض",
      activities: "الأنشطة",
      contact: "تواصل معنا",
      members: "فصولي (الأعضاء)",
    },
    hero: {
      location: "مدينة الأقصر، مصر",
      title: "أكاديمية ORCA للسباحة",
      subtitle: "مرحباً بك في أكاديمية ORCA 🐋\nتعلم وتدرب وحقق التميز في السباحة مع مدربين محترفين وبرامج حديثة ومجموعات صغيرة بحد أقصى 4 أطفال للتركيز الأفضل.",
      login: "دخول الأعضاء",
      register: "سجل طفلك الآن",
    },
    why: {
      title: "لماذا تختار ORCA؟",
      features: [
        { title: "مجموعات صغيرة", desc: "حد أقصى 4 أطفال في المجموعة لضمان الاهتمام الكامل بكل طفل.", icon: "👥" },
        { title: "تعلم آمن", desc: "بيئة ودية وآمنة تساعد الأطفال على الشعور بالثقة في الماء.", icon: "🛡️" },
        { title: "مدربون محترفون", desc: "مدربون ذوو خبرة يركزون على التقدم والراحة والنتائج الحقيقية.", icon: "🎓" },
      ]
    },
    benefits: {
      title: "فوائد السباحة",
      items: [
        { title: "تقوية الجسم", desc: "تطوير العضلات واللياقة البدنية بطريقة آمنة وفعالة.", icon: "💪" },
        { title: "تطوير الثقة", desc: "بناء الثقة بالنفس والشجاعة من خلال تحقيق الإنجازات.", icon: "🧠" },
        { title: "الصحة النفسية", desc: "تقليل التوتر والقلق والاستمتاع بنشاط ممتع وصحي.", icon: "😊" },
        { title: "تحديد الأهداف", desc: "تعلم كيفية وضع الأهداف والعمل بجد لتحقيقها.", icon: "🎯" },
      ]
    },
    signup: {
      title: "سجل طفلك الآن",
      subtitle: "انضم إلى عائلة ORCA واستمتع برحلة تعليمية ممتعة وآمنة",
    },
    gallery: {
      title: "معرض التدريبات",
      subtitle: "شاهد لحظات من تدريباتنا المميزة",
    },
    activities: {
      title: "أنشطة الأكاديمية",
      items: [
        { title: "سباحة الأطفال", desc: "برامج متخصصة للأطفال مع مدربين محترفين وخبرة عالية.", icon: "👶" },
        { title: "سباحة الكبار", desc: "تطوير المهارات واللياقة البدنية للكبار في بيئة آمنة وودية.", icon: "🏊" },
        { title: "البطولات", desc: "تنظيم بطولات سباحة طوال السنة لتطوير المواهب والمهارات.", icon: "🏆" },
      ]
    },
    contact: {
      title: "تواصل معنا",
      text: "تواصل معنا مباشرة عبر WhatsApp أو Facebook للحصول على إجابات سريعة والحجز.",
    },
    footer: {
      rights: "أكاديمية ORCA للسباحة. جميع الحقوق محفوظة.",
      location: "الأقصر، مصر",
    },
    login: {
      back: "← الرجوع للرئيسية",
      placeholderName: "اسم الطالب",
      placeholderPhone: "رقم الهاتف",
      button: "دخول",
      loading: "جاري الدخول...",
      loadingData: "جاري التحميل...",
    }
  }
};

function Home({ onStart, setPage, lang, setLang }) {
  const t = translations[lang];
  
  const activities = [
    { img: "/Kids.JPG", ...t.activities.items[0] },
    { img: "/Adult.JPG", ...t.activities.items[1] },
    { img: "/Championships.JPG", ...t.activities.items[2] },
  ];

  return (
    <div className={`home-container ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="topbar">
        <div className="nav-links">
          <a href="#about" className="nav-btn">{t.nav.about}</a>
          <a href="#why" className="nav-btn">{t.nav.why}</a>
          <a href="#gallery" className="nav-btn">{t.nav.gallery}</a>
          <a href="#activities" className="nav-btn">{t.nav.activities}</a>
          <a href="#contact" className="nav-btn">{t.nav.contact}</a>
        </div>
        <div className="nav-actions">
          <button className="lang-switch-btn" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
            {lang === 'en' ? 'العربية 🇪🇬' : 'English 🇺🇸'}
          </button>
          <button className="nav-btn member-btn" onClick={() => setPage("login")}>
            {t.nav.members}
          </button>
        </div>
      </div>

      <div className="hero-section">
        <div className="home-logo">
          <img src="/ORCA2.png" alt="ORCA Logo" className="logo-large" />
        </div>

        <section id="about" className="section about-section">
          <span className="badge">🌍 {t.hero.location}</span>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="main-desc hero-subtitle">
            {t.hero.subtitle.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
          </p>

          <div className="hero-actions">
            <button className="get-started-btn" onClick={onStart}>{t.hero.login}</button>
            <a href="#signup" className="secondary-link">{t.hero.register}</a>
          </div>
        </section>
      </div>

      <section id="why" className="section why-section">
        <h2>{t.why.title}</h2>
        <div className="why-grid">
          {t.why.features.map((feature, idx) => (
            <div key={idx} className="info-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="section benefits-section">
        <h2>{t.benefits.title}</h2>
        <div className="benefits-grid">
          {t.benefits.items.map((item, idx) => (
            <div key={idx} className="benefit-item">
              <span className="benefit-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="signup" className="section">
        <h2>{t.signup.title}</h2>
        <p className="section-subtitle">{t.signup.subtitle}</p>
        <SignupForm lang={lang} />
      </section>

      <section id="gallery" className="section">
        <h2>{t.gallery.title}</h2>
        <p className="section-subtitle">{t.gallery.subtitle}</p>
        <div className="gallery-grid">
          <img src="/training1.JPG" alt="Training 1" />
          <img src="/training2.JPG" alt="Training 2" />
          <img src="/training3.JPG" alt="Training 3" />
        </div>
      </section>

      <section id="activities" className="section">
        <h2>{t.activities.title}</h2>
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
        <h2>{t.contact.title}</h2>
        <p className="contact-text">{t.contact.text}</p>
        <div className="contact-links">
          <a href="https://wa.me/201012201021" target="_blank" rel="noopener noreferrer" className="nav-btn whatsapp-btn">
            💬 WhatsApp
          </a>
          <a href="https://www.facebook.com/profile.php?id=61578271988798" target="_blank" rel="noopener noreferrer" className="nav-btn fb-btn">
            📘 Facebook
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <p className="footer-location">📍 {t.footer.location}</p>
        </div>
      </footer>
    </div>
  );
}

function Login({ onLogin, setPage, lang }) {
  const t = translations[lang].login;
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
        if (!res.ok) throw new Error(CONFIG.ERRORS.NETWORK_ERROR);
        const csvText = await res.text();
        const results = Papa.parse(csvText, { header: true });
        if (!results.data || results.data.length === 0) throw new Error("Data Error");
        setStudents(results.data);
      } catch (err) {
        setError(err.message || CONFIG.ERRORS.SERVER_ERROR);
      } finally {
        setLoading(false);
      }
    };
    loadStudents();
  }, []);

  const handleLogin = async () => {
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    setNameError(nameErr);
    setPhoneError(phoneErr);
    if (nameErr || phoneErr) return;

    try {
      setLoginLoading(true);
      setError(null);
      const found = students.find(s => 
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
    } finally {
      setLoginLoading(false);
    }
  };

  if (loading) return (
    <div className="login-container">
      <div className="login-box fade-in"><p>{t.loadingData}</p></div>
    </div>
  );

  return (
    <div className={`login-container ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="login-box fade-in">
        <button className="back-btn" onClick={() => setPage("home")} disabled={loginLoading}>{t.back}</button>
        <img src="/ORCA.png" alt="Logo" className="logo-small" />
        {error && <div className="error-message">{error}</div>}
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.placeholderName} className="login-input" />
        {nameError && <span className="input-error">{nameError}</span>}
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.placeholderPhone} className="login-input" />
        {phoneError && <span className="input-error">{phoneError}</span>}
        <button className="login-btn" onClick={handleLogin} disabled={loginLoading}>{loginLoading ? t.loading : t.button}</button>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [student, setStudent] = useState(null);
  const [lang, setLang] = useState("en");

  const handleLogin = (studentData) => {
    setStudent(studentData);
    setPage("schedule");
  };

  return (
    <>
      {page === "home" && <Home onStart={() => setPage("login")} setPage={setPage} lang={lang} setLang={setLang} />}
      {page === "login" && <Login onLogin={handleLogin} setPage={setPage} lang={lang} />}
      {page === "schedule" && <Schedule student={student} setPage={setPage} lang={lang} />}
    </>
  );
}

export default App;