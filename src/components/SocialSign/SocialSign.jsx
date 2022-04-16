import React from "react";

const SocialSign = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{ height: "1px", backgroundColor: "red", width: "50%" }}
        ></span>
        <p style={{ padding: "0 10px" }}>or</p>
        <span
          style={{ height: "1px", backgroundColor: "blue", width: "50%" }}
        ></span>
      </div>
      <button style={{ marginBottom: "1rem" }} className="submit">
        Google Sign In
      </button>
      <button style={{ marginBottom: "1rem" }} className="submit">
        Facebook Sign In
      </button>
      <button style={{ marginBottom: "1rem" }} className="submit">
        Github Sign In
      </button>
    </div>
  );
};

export default SocialSign;
