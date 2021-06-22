import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import "./Login.css";
import logo from "./Blackscythe.png";

function Login() {
  return (
    <div>
      <img src={logo} className="logo" />
      <h1 className="heading">Free Tier Frolic</h1>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        className="email-input"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        className="password-input"
        type="password"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="button-input"
        size="large"
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
