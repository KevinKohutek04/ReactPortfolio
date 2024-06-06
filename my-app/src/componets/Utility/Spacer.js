import React from "react";

const Spacer = ({ amount }) => {
  return (
    <div
      className="Space"
      style={{ marginBottom: `${amount * 5}%` }}
    ></div>
  );
};

export default Spacer;
