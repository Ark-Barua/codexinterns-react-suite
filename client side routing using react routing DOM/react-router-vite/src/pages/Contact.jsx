import React from "react";

function App() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      backgroundColor: "#f4f6f8",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#1e90ff", marginBottom: "20px" }}>Contact Page</h1>

      <div style={{ marginBottom: "15px" }}>
        <label>First Name:</label><br />
        <input
          type="text"
          placeholder="Enter your first name"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Last Name:</label><br />
        <input
          type="text"
          placeholder="Enter your last name"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Date of Birth:</label><br />
        <input
          type="date"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Email:</label><br />
        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
        />
      </div>

      <button style={buttonStyle}>Submit</button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box"
};

const buttonStyle = {
  backgroundColor: "#1e90ff",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "6px",
  cursor: "pointer"
};

export default App;
