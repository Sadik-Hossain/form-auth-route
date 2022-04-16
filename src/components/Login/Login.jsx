import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="form-container">
      <h1 style={{ textAlign: "center" }}>please login</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="email"
            name="email"
            id=""
            placeholder="your email"
          />
          <input
            className="input-field"
            type="password"
            name="password"
            id=""
            placeholder="your password"
          />
          <input className="submit" type="submit" value="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
