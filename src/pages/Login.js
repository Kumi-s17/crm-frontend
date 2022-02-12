import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Marginer } from "../components/Marginer.js";
// import login function from api.js
import { login } from "../api.js";
import logo from "../image/blue-logo2.png";
// import personalised components
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

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    login({
      email: email,
      password: password,
    });

    const state = { redirect: "/profile" };
    return <Redirect to={state.redirect} />;
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <LogoPortrait>
          <img src={logo} style={{ width: "100%", borderRadius: "50%" }} />
        </LogoPortrait>
        <HeaderTextContainer>
          <HeaderText>Welcome back</HeaderText>
          <SmallText>Please login to continue</SmallText>
        </HeaderTextContainer>
      </HeaderContainer>
      <Marginer direction="vertical" margin="3.5em" />
      <FaRegUser size={80} style={{ fill: "#505050" }} />
      <Marginer direction="vertical" margin="1em" />
      <BoxContainer>
        <FormContainer>
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
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.5em" />
        <SubmitButton type="submit" onClick={onSubmit}>
          Login
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#" style={{ color: "gray" }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </MutedLink>
        <MutedLink href="#" style={{ color: "gray" }}>
          Forgot your password?
        </MutedLink>
      </BoxContainer>
    </PageContainer>
  );
}

// export Login component for use in App.js
export default Login;
