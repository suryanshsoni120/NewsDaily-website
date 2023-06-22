import React from "react";
// import spinner from "./spinner.gif";

const Spinner = ({ theme }) => {
  return (
    <div
      className={`d-flex justify-content-center text-${
        theme === "light" ? "dark" : "light"
      }`}
    >
      <div className="spinner-border" role="status">
        {/* <span class="sr-only">Loading...</span> */}
      </div>
    </div>
  );
};

export default Spinner;
