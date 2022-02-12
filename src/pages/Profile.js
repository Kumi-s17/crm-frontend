import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Marginer } from "../components/Marginer.js";
import { updateUser } from "../api.js";
import logo from "../image/blue-logo2.png";
import {
  PageContainer,
  HeaderContainer,
  HeaderText,
  SmallText,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  LogoPortrait,
  HeaderTextContainer,
} from "../components/StyledComponents.js";

export function Profile(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    // using API function to submit data to FoodBuddy API
    updateUser({
      username: username,
      email: email,
      password: password,
      oldEmail: localStorage.getItem("email"),
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
          <HeaderText>Profile</HeaderText>
          <SmallText>Please change personal details</SmallText>
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
            placeholder="Enter new username"
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
            placeholder="Enter new email"
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
            placeholder="Enter new password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          /> 
        </FormContainer>
        <Marginer direction="vertical" margin="1.5em" />
        <SubmitButton type="submit" onClick={onSubmit}>
          Confirm
        </SubmitButton>
  
      </BoxContainer>
    </PageContainer>
  );
}

export default Profile;
