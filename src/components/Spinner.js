import React from "react";

const Spinner = (props) => {
  return (
    <div
      className={`d-flex justify-content-center text-${
        props.theme === "light" ? "dark" : "light"
      }`}
    >
      <div className="spinner-border" role="status"></div>
    </div>
  );
};

export default Spinner;
