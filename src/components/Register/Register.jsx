import React from "react";
import SocialSign from "../SocialSign/SocialSign";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      alert(`password not matched`);
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <div className="form-container">
      <h1 style={{ textAlign: "center" }}>please register</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name </label>
          <input
            className="input-field"
            type="name"
            name="name"
            id="name"
            placeholder="your name"
          />

          <label htmlFor="">email</label>
          <input
            className="input-field"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <label htmlFor="">password</label>
          <input
            className="input-field"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <label htmlFor="">confirm password</label>
          <input
            className="input-field"
            type="password"
            name="confirmPassword"
            id=""
            placeholder="confirm password"
          />
          <input className="submit" type="submit" value="sign up" />
          <SocialSign />
        </form>
      </div>
    </div>
  );
};

export default Register;
