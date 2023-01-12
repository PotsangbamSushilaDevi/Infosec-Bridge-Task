import { Card } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    email.preventDefault();
    console.log(email);
  };

  return (
    <Card>
      <img className="img" src="../logo512.png" />
      <div className="text1">
        <p className="text2"> SOME RANDOM TEXT, SOME RANDOM</p>
        <p className="text2">TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
      </div>

      <div class="box">
        <input
          type="radio"
          class="tab-toggle"
          name="tab-toggle"
          id="tab1"
          checked
        />
        <input type="radio" class="tab-toggle" name="tab-toggle" id="tab2" />
        <ul class="tab-list">
          <li class="tab-item">
            <label class="tab-trigger" for="tab1">
              Login
            </label>
          </li>
          <li class="tab-item">
            <label class="tab-trigger" for="tab2">
              Signup
            </label>
          </li>
        </ul>

        <div class="tab-container">
          <div class="tab-content">
            <form className="Login-form">
              <input
                className="Login"
                type="email"
                margin="normal"
                placeholder="Email Address"
                id="email"
                name="email"
              />

              <input
                className="Password"
                type="password"
                placeholder="Password"
                id="password"
                nane="password"
              />
              <button className="btn" type="submit">
                Log In
              </button>
            </form>
            <a className="pass">Forget Password?</a>
          </div>
          <div class="tab-content">
            <form className="Login-form">

            <input
                className="Login"
                type="user"
                margin="normal"
                placeholder="UserName"
                id="user"
                name="user"
              />
              <input
                className="Login"
                type="email"
                margin="normal"
                placeholder="Email Address"
                id="email"
                name="email"
              />
              
              <input
                className="Password"
                type="password"
                placeholder="Password"
                id="password"
                nane="password"
              />
              <button className="btn" type="submit">
                SignUp
              </button>
            </form>
          </div>
          <p>or login with</p>

          <div className="login-1">
            <img className="logos" src="../search.png" />
            <img className="logos" src="../facebook.png" />
            <img className="logos" src="../twitter.png" />
          </div>
          <p>
            Don't have an account?{" "}
            <a href="#" className="create">
              Create new now!
            </a>
          </p>

          <p>
            By signing up, you are agree with our{" "}
            <a href="#" className="create">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
};
