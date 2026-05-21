import { useState } from "react";
import { CONFIG, validateName, validatePhone, getFullApiUrl } from "./config";

function SignupForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    
    setNameError(nameErr);
    setPhoneError(phoneErr);
    
    if (nameErr || phoneErr) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const res = await fetch(getFullApiUrl(CONFIG.REGISTER_ENDPOINT), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      if (!res.ok) {
        if (res.status === 500) {
          throw new Error(CONFIG.ERRORS.SERVER_ERROR);
        }
        throw new Error("فشل التسجيل، يرجى المحاولة لاحقاً");
      }

      const data = await res.json();
      setSuccess(true);
      setName("");
      setPhone("");
      
      // Show success message for 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message || CONFIG.ERRORS.NETWORK_ERROR);
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          {CONFIG.SUCCESS.SIGNUP_SUCCESS}
        </div>
      )}

      <div>
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="اسم الطالب"
          required
          disabled={loading}
        />
        {nameError && <span className="input-error">{nameError}</span>}
      </div>

      <div>
        <input
          value={phone}
          onChange={handlePhoneChange}
          placeholder="رقم الهاتف"
          required
          disabled={loading}
        />
        {phoneError && <span className="input-error">{phoneError}</span>}
      </div>

      <button 
        type="submit"
        disabled={loading || !!nameError || !!phoneError}
      >
        {loading ? "جاري الإرسال..." : "تسجيل"}
      </button>
    </form>
  );
}

export default SignupForm;
