// src/Home.js
function Home({ onStart }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #004d40, #00796b)",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img
        src="/ORCA.png"
        alt="ORCA Logo"
        style={{
          width: "150px",
          marginBottom: "20px",
          borderRadius: "50%",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        }}
      />
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        ORCA Swimming Academy
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px", maxWidth: "500px" }}>
        Welcome to ORCA Academy 🏊‍♂️  
        Learn, train, and achieve excellence in swimming with our professional
        coaches and tailored programs.
      </p>
      <button
        onClick={onStart}
        style={{
          padding: "15px 35px",
          backgroundColor: "#ffcc00",
          color: "#004d40",
          border: "none",
          borderRadius: "12px",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e6b800")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ffcc00")}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
