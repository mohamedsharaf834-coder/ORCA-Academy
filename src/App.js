import React, { useState } from 'react';
import './App.css';
import SignupForm from './SignupForm';
import Schedule from './Schedule';

const testimonials = [
  {
    name: 'م/ سارة',
    text: 'الاهتمام مع المجموعات الصغيرة فرق جدًا مع بنتي، وبقت تحب السباحة وتستمتع بكل حصة.',
  },
  {
    name: 'أ/ أحمد',
    text: 'تنظيم ممتاز، وطريقة شرح بسيطة ومريحة للأطفال، والأكاديمية فعلاً مميزة.',
  },
  {
    name: 'أ/ منى',
    text: 'المدربون محترفون جدًا، والتعامل مع الأطفال راقي وآمن.',
  },
];

const programs = [
  {
    title: 'مبتدئين',
    desc: 'تعليم أساسيات السباحة خطوة بخطوة للأطفال بطريقة ممتعة وآمنة.',
  },
  {
    title: 'تطوير المستوى',
    desc: 'تحسين المهارات، الثقة في الماء، وتطوير الأداء بشكل تدريجي.',
  },
  {
    title: 'مجموعات صغيرة',
    desc: 'حد أقصى 4 أطفال في المجموعة لضمان تركيز أكبر لكل طفل.',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">🐋</div>
          <div>
            <h1>ORCA Swimming Academy</h1>
            <p>ENJOY • SWIM • SUCCEED</p>
          </div>
        </div>

        <nav className="nav">
          <button onClick={() => setActiveSection('home')}>الرئيسية</button>
          <button onClick={() => setActiveSection('programs')}>البرامج</button>
          <button onClick={() => setActiveSection('schedule')}>الجدول</button>
          <button onClick={() => setActiveSection('contact')}>التسجيل</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="badge">Luxor City, Egypt</span>
            <h2>أكاديمية سباحة للأطفال بمجموعات صغيرة واهتمام أكبر</h2>
            <p>
              ORCA Swimming Academy بتقدّم تجربة تعليم سباحة ممتعة وآمنة للأطفال،
              مع متابعة فردية وتركيز أعلى داخل مجموعات صغيرة لا تتجاوز 4 أطفال.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn">سجّل الآن</a>
              <a href="tel:+201007959669" className="secondary-btn">اتصل بنا</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="orca-icon">🐋</div>
            <h3>ENJOY • SWIM • SUCCEED</h3>
            <p>تعلم، متعة، وتقدم حقيقي داخل بيئة آمنة ومحببة للأطفال.</p>
          </div>
        </section>

        <section className="info-strip">
          <div>
            <strong>4 max</strong>
            <span>أقصى عدد في المجموعة</span>
          </div>
          <div>
            <strong>Kids Focus</strong>
            <span>مخصص للأطفال</span>
          </div>
          <div>
            <strong>Luxor</strong>
            <span>مدينة الأقصر</span>
          </div>
          <div>
            <strong>WhatsApp</strong>
            <span>تواصل سريع ومباشر</span>
          </div>
        </section>

        <section className="section" id="programs">
          <div className="section-head">
            <h2>البرامج</h2>
            <p>برامج مصممة لتناسب مختلف المستويات العمرية والمهارية.</p>
          </div>

          <div className="card-grid">
            {programs.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section why">
          <div className="section-head">
            <h2>ليه ORCA؟</h2>
            <p>لأننا بنهتم بجودة التعليم، الراحة، والمتابعة الحقيقية لكل طفل.</p>
          </div>

          <div className="why-list">
            <div className="why-item">مجموعات صغيرة = تركيز أكبر.</div>
            <div className="why-item">بيئة آمنة ومشجعة للأطفال.</div>
            <div className="why-item">أسلوب ممتع يخلّي الطفل يحب السباحة.</div>
            <div className="why-item">متابعة واضحة مع أولياء الأمور.</div>
          </div>
        </section>

        <section className="section" id="schedule">
          <div className="section-head">
            <h2>جدول الدروس</h2>
            <p>يمكنك مراجعة أوقات التدريب وتنظيم الحجز حسب المتاح.</p>
          </div>
          <Schedule />
        </section>

        <section className="section testimonials">
          <div className="section-head">
            <h2>آراء أولياء الأمور</h2>
            <p>الثقة بتبنى من التجربة والنتائج.</p>
          </div>

          <div className="card-grid">
            {testimonials.map((item) => (
              <article className="card testimonial" key={item.name}>
                <p>“{item.text}”</p>
                <h4>{item.name}</h4>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-head">
            <h2>التسجيل والتواصل</h2>
            <p>املأ البيانات وسيتم التواصل معك في أقرب وقت.</p>
          </div>

          <div className="contact-layout">
            <SignupForm />
            <div className="contact-box">
              <h3>معلومات التواصل</h3>
              <p>📍 Luxor City, Egypt</p>
              <p>📞 +20 10 07959669</p>
              <p>📘 Facebook: ORCA Swimming Academy</p>
              <p>🌐 orca-academy.vercel.app</p>
              <a className="whatsapp-btn" href="https://wa.me/201007959669" target="_blank" rel="noreferrer">
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 ORCA Swimming Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;