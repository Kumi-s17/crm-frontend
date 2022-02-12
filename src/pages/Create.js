import React, { useState, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import logo from "../image/blue-logo2.png";
import avatar from "../image/blue-photo-icon2.png";
import { Marginer } from "../components/Marginer.js";
// import add Contact function from api.js
import { addContact } from "../api.js";
// import personalised components
import {
  PageContainer,
  HeaderContainer,
  HeadPortrait,
  HeaderText,
  BoxContainer,
  ContactFormContainer,
  InputBar,
  ContactInput,
  IconImg,
  MutedLink,
  BtnBar,
  CancelButton,
  TagBubble,
  TagContainer,
  LogoPortrait,
  HeaderTextContainer,
  CreateButton,
  SmallText,
  TagInputBar,
  TagInput,
  TagForm,
} from "../components/StyledComponents.js";

export function Create(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [tag, setTag] = useState("");
  const [comments, setComments] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = () => {
    setTags([...tags, tag]);
    setTag("");
  };

  // when user clicks submit button this function is called
  function onSubmit() {
    /* onSubmit calls create contact function from api.js, passing state variables as       parameters */
    let contact = {
      name: name,
      contactEmail: email,
      number: number,
      tags: tags,
      comments: comments,
      userEmail: localStorage.getItem("email"),
    };

    console.log("form data--->>>>>", contact);

    addContact(contact);

    // choose where we want to redirect user
    const state = { redirect: "/profile" };
    return <Redirect to={state.redirect} />;
  }

  function onCancel() {
    window.location.href = "/home";
  }

  function onUpload() {
    console.log("upload photo。。。。。。");
  }

  // This return() is what is displayed on the users screen
  return (
    <PageContainer>
      <HeaderContainer>
        <LogoPortrait>
          <img src={logo} style={{ width: "100%", borderRadius: "50%" }} />
        </LogoPortrait>
        <HeaderTextContainer>
          <HeaderText>Create Contact</HeaderText>
          <SmallText>{localStorage.username}'s CRM</SmallText>
        </HeaderTextContainer>
      </HeaderContainer>

      <HeadPortrait>
        <img src={avatar} style={{ width: "70%", borderRadius: "0%" }} />
      </HeadPortrait>

      <Link
        onClick={onUpload}
        style={({ color: "grey" }, { fontSize: "12px" })}
      >
        Add photo
      </Link>
      <BoxContainer>
        <ContactFormContainer>
          <InputBar>
            <ContactInput
              type="text"
              name="name"
              id="name"
              value={name} // corresponds to state varibale we defined above
              placeholder="NAME"
              // when user types we update state variable via setEmail()
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </InputBar>
          <Marginer direction="vertical" margin="0.5em" />
          <InputBar>
            <ContactInput
              type="email"
              name="email"
              id="email"
              value={email} // corresponds to state varibale we defined above
              placeholder="EMAIL"
              // when user types we update state variable via setEmail()
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </InputBar>
          <Marginer direction="vertical" margin="0.5em" />
          <InputBar>
            <ContactInput
              type="text"
              name="number"
              id="number"
              value={number} // corresponds to state varibale we defined above
              placeholder="NUMBER"
              // when user types we update state variable via setEmail()
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            />
          </InputBar>
          <Marginer direction="vertical" margin="0.5em" />
          <InputBar>
            <ContactInput
              type="text"
              name="comments"
              id="comments"
              value={comments} // corresponds to state varibale we defined above
              placeholder="COMMENTS"
              // when user types we update state variable via setEmail()
              onChange={(event) => {
                setComments(event.target.value);
              }}
            />
          </InputBar>
          <Marginer direction="vertical" margin="0.5em" />
          <TagForm>
            <TagInputBar>
              <TagInput
                type="text"
                name="tags"
                id="tags"
                value={tag} // corresponds to state varibale we defined above
                placeholder="TAGS"
                // when user types we update state variable via setEmail()
                onChange={(event) => {
                  setTag(event.target.value);
                }}
              />
              <IconImg type="button" onClick={addTag} value="Add" />
            </TagInputBar>
            <TagContainer>
              {tags.map((tag) => (
                <TagBubble>#{tag}</TagBubble>
              ))}
            </TagContainer>
          </TagForm>
        </ContactFormContainer>

        <Marginer direction="vertical" margin="2em" />

        <BtnBar>
          <CreateButton type="submit" onClick={onSubmit}>
            Create
          </CreateButton>

          <CancelButton type="reset" onClick={onCancel}>
            Cancel
          </CancelButton>
        </BtnBar>
      </BoxContainer>
    </PageContainer>
  );
}

// export Login component for use in App.js
export default Create;
