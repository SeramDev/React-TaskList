import React from "react";

export default function SingleTask({ title, index, isBold }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "15px",
        borderLeft: "2px solid gray",
        borderRight: "2px solid gray",
        borderTop: index === 0 && "2px solid gray",
        borderBottom: "2px solid gray",
      }}
    >
      <input type="checkbox" />

      <p style={{ marginLeft: "10px", fontWeight: isBold && "bold" }}>
        {" "}
        {title}
      </p>
    </div>
  );
}
