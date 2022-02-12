import { useState, useEffect } from "react";
import axios from "axios";

/* 
  contains all functions that will be used to communicate with backend,
  must be imported before using
*/

// base URL where our server is listening for requests
const BASE_URL = "https://comp30022-backend.herokuapp.com";
//const BASE_URL = "http://localhost:8000";

export async function addContact(contact) {
  // user parameter contains state variables from Login.js
  const { name, contactEmail, number, tags, comments, userEmail } = contact;
  let msg = '';

  if (!name) {
    msg = 'Must provide name';
    alert(msg);
    return msg;
  }

  /* define a URL so backend server knows how to handle incoming request.
      This URL must match exactly the URL path defined in backend  */
  const endpoint = BASE_URL + `/addContact`;

  // we use axios api to make our requests to server
  let data = await axios({
    url: endpoint,
    method: "POST", // if we want to request data method would be "GET"
    headers: {
      "Content-Type": "application/json",
    },
    // data we are sending to server
    data: JSON.stringify(
      {
        name: name,
        contactEmail: contactEmail,
        number: number,
        tags: tags,
        comments: comments,
        userEmail: userEmail,
      },
      { withCredentials: true }
    ),
  })
    .then((res) => res.data)
    .then((data) => {
      alert("Contact created.");

      window.location.href = "/home";
    })
    .catch((e) => {
      console.log(e);
      alert("An error occured. Please try again");
    });
}

export async function login(user) {
  // user parameter contains state variables from Login.js
  const { email, password } = user;
  let msg = '';

  if (!email || !password) {
    msg = 'Must provide username and password';
    alert(msg);
    return msg;
  }

  /* define a URL so backend server knows how to handle incoming request.
      This URL must match exactly the URL path defined in backend  */
  const endpoint = BASE_URL + `/login`;

  // we use axios api to make our requests to server
  let data = await axios({
    url: endpoint,
    method: "POST", // if we want to request data method would be "GET"
    headers: {
      "Content-Type": "application/json",
    },
    // data we are sending to server
    data: JSON.stringify(
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    ),
  })
    .then((res) => res.data)
    .then((data) => {
      console.log("username: " + data.username);
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", email);
      window.location.href = "/home";
    })
    .catch((e) => {
      console.log(e);
      alert("An error occured. Please try again");
    });
}

export async function signupUser(user) {
  const endpoint = BASE_URL + `/signup`;
  let err_msg = ''
  const { username, email, password, password2 } = user;

  if (!username || !email || !password || !password2) {
    err_msg = "Must provide username, email and password";
    alert(err_msg);
    return err_msg;
  }

  if (password !== password2) {
    err_msg = "Passwords do not match";
    alert(err_msg);
    return err_msg;
  }

  var length = false;
  var alpha = false;
  var numeric = false;
  if (password.length >= 8) {
    length = true;
  }
  for (var i = 0; i < password.length; i++) {
    if (password.charAt(i).toLowerCase !== password.charAt(i).toUpperCase) {
      alpha = true;
    }
    if (password.charAt(i) >= "0" && password.charAt(i) <= "9") {
      numeric = true;
    }
  }
  if (!length || !alpha || !numeric) {
    err_msg = "Password must be at least eight characters and contain at least one alphabet character and at least one numerical digit";
    alert(err_msg);
    return err_msg;
  }

  axios({
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    data: {
      username: username,
      email: email,
      password: password,
    },
  })
    .then(() => {
      alert("Account created. Please login to continue");
      window.location.href = "/";
      return "Account created. Please login to continue";
    })
    .catch((e) => {
      console.log(e);
      alert("User already exists");
      return "User already exists";
    });
}

export async function updateUser(user) {
  const endpoint = BASE_URL + `/update-user`;

  const { username, email, password,oldEmail } = user;

  if (!username || !email || !password) {
    alert("Must provide username, email and password");
    return;
  }

  var length = false;
  var alpha = false;
  var numeric = false;
  if (password.length >= 8) {
    length = true;
  }
  for (var i = 0; i < password.length; i++) {
    if (password.charAt(i).toLowerCase !== password.charAt(i).toUpperCase) {
      alpha = true;
    }
    if (password.charAt(i) >= "0" && password.charAt(i) <= "9") {
      numeric = true;
    }
  }
  if (!length || !alpha || !numeric) {
    alert(
      "Password must be at least eight characters and contain at least one alphabet character and at least one numerical digit"
    );
    return;
  }

  axios({
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    data: {
      username: username,
      email: email,
      password: password,
      oldEmail:oldEmail
    },
  })
    .then(() => {
      alert("Update successful. please log in again");
      window.location.href = "/";
    })
    .catch((e) => {
      console.log(e);
      alert(e);
    });
}

// This gets contacts from backend using the users email.
function getContacts(userEmail) {
  const endpoint = BASE_URL + /homePage/ + userEmail;
  return fetch(endpoint).then((res) => res.json());
}

// This stores our contacts locally so we populate the home page
export function useContacts(id) {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getContacts(id)
      .then((contacts) => {
        setContacts(contacts);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setLoading(false);
      });
  }, []);


  return {
    loading,
    contacts,
    error,
  };
}



export async function editContact(contact) {
  // user parameter contains state variables from Login.js
  const {
    name,
    contactEmail,
    number,
    tags,
    comments,
    userEmail,
    _ID
  } = contact;

  if (!name) {
    alert("Must provide name");
    return;
  }

  /* define a URL so backend server knows how to handle incoming request.
      This URL must match exactly the URL path defined in backend  */
  const endpoint = BASE_URL + `/editContact`;

  console.log(_ID);

  // we use axios api to make our requests to server
  let data = await axios({
    url: endpoint,
    method: "POST", // if we want to request data method would be "GET"
    headers: {
      "Content-Type": "application/json",
    },
    // data we are sending to server
    data: JSON.stringify(
      {
        name: name,
        contactEmail: contactEmail,
        number: number,
        tags: tags,
        comments: comments,
        userEmail: userEmail,
        _ID: _ID,
      },
      { withCredentials: true }
    ),
  })
    .then((res) => res.data)
    .then((data) => {
      alert("Contact created.");

      window.location.href = "/home";
    })
    .catch((e) => {
      console.log(e);
      alert("An error occured. Please try again");
    });
}