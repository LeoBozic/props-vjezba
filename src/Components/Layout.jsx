import React from "react";

function Layout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "10px",
        fontSize: "20px",
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
