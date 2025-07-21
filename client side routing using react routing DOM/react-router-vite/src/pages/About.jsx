import React from "react";

function App() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        I am <strong>Ark Barua</strong>, the creator of the <em>react-router-dom</em> project. <br />
        This project demonstrates clean client-side routing with a simple, modern UI using React and Vite.
      </p>
    </div>
  );
}

const containerStyle = {
  maxWidth: "700px",
  margin: "50px auto",
  padding: "30px",
  backgroundColor: "#f4f6f8",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
  color: "#333",
};

const headingStyle = {
  fontSize: "32px",
  color: "#1e90ff",
  marginBottom: "20px",
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
};

export default App;
