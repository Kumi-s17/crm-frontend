import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Marginer } from "../components/Marginer.js";
import { signupUser } from "../api.js";
import logo from "../image/blue-logo2.png";
import {
  PageContainer,
  HeaderContainer,
  HeaderText,
  SmallText,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  BoldLink,
  LogoPortrait,
  HeaderTextContainer,
} from "../components/StyledComponents.js";

export function Signup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function onSubmit() {
    // using API function to submit data to FoodBuddy API
    signupUser({
      username: username,
      email: email,
      password: password,
      password2: password2,
    });

    // redirect to homepage
    const state = { redirect: "/" };
    return <Redirect to={state.redirect} />;
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <LogoPortrait>
          <img src={logo} style={{ width: "100%", borderRadius: "50%" }} />
        </LogoPortrait>
        <HeaderTextContainer>
          <HeaderText>Create account</HeaderText>
          <SmallText>Please sign up to continue</SmallText>
        </HeaderTextContainer>
      </HeaderContainer>
      <FaRegUser size={80} style={{ fill: "#505050" }} />
      <BoxContainer>
        <FormContainer>
          <Input
            type="username"
            name="username"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <br />
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          <Input
            type="password"
            name="password2"
            id="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={(event) => {
              setPassword2(event.target.value);
            }}
          />
        </FormContainer>
        <Marginer direction="vertical" margin="1.5em" />
        <SubmitButton type="submit" onClick={onSubmit}>
          Sign up
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account? <Link to="/">Login</Link>
        </MutedLink>
      </BoxContainer>
    </PageContainer>
  );
}

export default Signup;
