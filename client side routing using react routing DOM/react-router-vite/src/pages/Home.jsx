import React from "react";

function App() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the Home Page</h1>
      <p style={paragraphStyle}>
        This is the starting point of your React Router DOM project. Navigate using the menu to explore other pages.
      </p>
    </div>
  );
}

const containerStyle = {
  maxWidth: "800px",
  margin: "50px auto",
  padding: "30px",
  backgroundColor: "#f0f4f8",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  fontSize: "32px",
  color: "#1e90ff",
  marginBottom: "20px",
};

const paragraphStyle = {
  fontSize: "18px",
  color: "#333",
  lineHeight: "1.6",
};

export default App;
