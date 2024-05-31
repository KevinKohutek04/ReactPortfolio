import React from "react";

const Spacer = ({ amount }) => {
  return (
    <div
      className="Space"
      style={{ marginBottom: `${amount * 50}px` }}
    ></div>
  );
};

export default Spacer;
