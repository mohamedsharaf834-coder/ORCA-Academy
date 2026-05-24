import { useState } from "react";
import { CONFIG, validateName, validatePhone, getFullApiUrl } from "./config";

const translations = {
  en: {
    labels: { name: "Student Name", phone: "Phone Number" },
    placeholders: { name: "Enter full name", phone: "Enter phone (e.g. 01012345678)" },
    button: { idle: "Register Now", loading: "Sending..." },
    messages: {
      success: "Registration Successful!",
      successDesc: "Thank you! Our team will contact you soon via WhatsApp or phone.",
      error: "Error!",
      note: "💡 After registration, our team will contact you to confirm details and start lessons."
    }
  },
  ar: {
    labels: { name: "اسم الطالب", phone: "رقم الهاتف" },
    placeholders: { name: "أدخل اسم الطالب كاملاً", phone: "أدخل رقم الهاتف (مثال: 01012345678)" },
    button: { idle: "سجل الآن", loading: "جاري الإرسال..." },
    messages: {
      success: "تم التسجيل بنجاح!",
      successDesc: "شكراً لك! سيتواصل معك فريقنا قريباً عبر WhatsApp أو الهاتف.",
      error: "خطأ!",
      note: "💡 بعد التسجيل، سيتواصل معك فريقنا لتأكيد البيانات والبدء في الدروس."
    }
  }
};

function SignupForm({ lang = "en" }) {
  const t = translations[lang];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    setNameError(nameErr);
    setPhoneError(phoneErr);
    if (nameErr || phoneErr) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const res = await fetch(getFullApiUrl(CONFIG.REGISTER_ENDPOINT), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      });

      if (!res.ok) throw new Error("Failed to register");
      setSuccess(true);
      setName("");
      setPhone("");
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`signup-form ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {error && (
        <div className="error-message">
          <span className="error-icon">❌</span>
          <div><strong>{t.messages.error}</strong><p>{error}</p></div>
        </div>
      )}

      {success && (
        <div className="success-message">
          <span className="success-icon">✅</span>
          <div><strong>{t.messages.success}</strong><p>{t.messages.successDesc}</p></div>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">{t.labels.name}</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.placeholders.name} required disabled={loading} className="signup-input" />
        {nameError && <span className="input-error">{nameError}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">{t.labels.phone}</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.placeholders.phone} required disabled={loading} className="signup-input" />
        {phoneError && <span className="input-error">{phoneError}</span>}
      </div>

      <button type="submit" disabled={loading} className="signup-submit-btn">
        {loading ? t.button.loading : t.button.idle}
      </button>

      <p className="form-note">{t.messages.note}</p>
    </form>
  );
}

export default SignupForm;