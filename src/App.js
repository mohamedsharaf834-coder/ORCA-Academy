import { useEffect, useState } from "react";
import Papa from "papaparse";
import Schedule from "./Schedule";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [student, setStudent] = useState(null);

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
    if (!found) return alert("البيانات غير موجودة");
    setStudent(found);
    setLoggedIn(true);
  };

  if (loggedIn && student) return <Schedule student={student} />;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px"
    }}>
      <img 
        src="/ORCA.png" 
        alt="ORCA Swimming Academy" 
        style={{
          width: "120px", 
          marginBottom: "25px", 
          borderRadius: "50%", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)" 
        }} 
      />
      <h1 style={{ marginBottom: "25px", color: "#00796b", fontSize: "28px" }}>LOGIN</h1>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="الاسم" 
        style={{
          padding: "12px",
          marginBottom: "15px",
          width: "280px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={e => e.target.style.borderColor = "#00796b"}
        onBlur={e => e.target.style.borderColor = "#ccc"}
      />
      <input 
        value={phone} 
        onChange={e => setPhone(e.target.value)} 
        placeholder="رقم التليفون" 
        style={{
          padding: "12px",
          marginBottom: "20px",
          width: "280px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={e => e.target.style.borderColor = "#00796b"}
        onBlur={e => e.target.style.borderColor = "#ccc"}
      />
      <button 
        onClick={handleLogin} 
        style={{
          padding: "12px 25px",
          backgroundColor: "#00796b",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onMouseOver={e => e.target.style.backgroundColor = "#004d40"}
        onMouseOut={e => e.target.style.backgroundColor = "#00796b"}
      >
        دخول
      </button>
    </div>
  );
}

export default App;
