import { useState } from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/add-student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });
    const data = await res.json();
    alert(data.message);
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Student Name" 
        required
      />
      <input 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Phone Number" 
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
