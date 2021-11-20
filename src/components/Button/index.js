import React from "react";

export default function Button({ children }) {
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        borderRadius: "8px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {children}
    </button>
  );
}
