import React, { useEffect, useState } from "react";
import { useContacts } from "../api";
// import { DataGrid, GridEvents, useGridApiRef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import logo from "../image/blue-logo2.png";
import { DataGrid} from "@mui/x-data-grid";
import { editContact } from "../api.js";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import {
  PageContainer,
  HeaderContainer,
  HeaderText,
  LogoPortrait,
  HeaderTextContainer,
  SmallText,
} from "../components/StyledComponents.js";


// These will be the columns associated with each contact
const columns = [
  { field: "id", headerName: "ID", width: 70, editable: true },
  { field: "name", headerName: "Name", width: 150, editable: true },
  { field: "email", headerName: "Email", width: 150, editable: true },
  { field: "number", headerName: "Number", width: 150, editable: true },
  { field: "tags", headerName: "Tags", width: 250, editable: true },
  { field: "comments", headerName: "Comments", width: 500, editable: true },
  { field: "dateAdded", headerName: "Date Added", width: 250, editable: true },
  { field: "_ID", hide: true },
];


// Represents the Home page
export function Home(props) {

  const { loading, contacts, error } = useContacts(localStorage.email);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  const rows = [];
  for (let i = 0; i < contacts.contacts.length; i++) {
    rows.push({
      id: i + 1,
      name: contacts.contacts[i].name,
      email: contacts.contacts[i].email,
      number: contacts.contacts[i].number,
      tags: contacts.contacts[i].tags,
      comments: contacts.contacts[i].comments,
      dateAdded: contacts.contacts[i].dateAdded,
      _ID: contacts.contacts[i]._id
    });
    
  }
 

  function handleCellEditCommit(p) {

    if(p.field === "name") {
      rows[p.id -1].name = p.value;
    }
    if (p.field === "email") {
      rows[p.id - 1].email = p.value;
    }
    if (p.field === "number") {
      rows[p.id - 1].number = p.value;
    }
    if (p.field === "tags") {
      rows[p.id - 1].tags = p.value;
    }
    if (p.field === "comments") {
      rows[p.id - 1].comments = p.value;
    }

    let updatedContact = {
      name: rows[p.id - 1].name,
      contactEmail: rows[p.id - 1].email,
      number: rows[p.id - 1].number,
      tags: rows[p.id - 1].tags,
      comments: rows[p.id - 1].comments,
      userEmail: localStorage.getItem("email"),
      _ID: rows[p.id - 1]._ID,
     
    };

    // Calls corresponding backend function from api.js
    editContact(updatedContact);
  }


  
  

  // Dislpay contacts list using material UI Components
  return (
    <PageContainer>
      <HeaderContainer>
        <LogoPortrait>
          <img src={logo} style={{ width: "100%", borderRadius: "50%" }} />
        </LogoPortrait>
        <HeaderTextContainer>
          <HeaderText>Contacts</HeaderText>
          <SmallText>{localStorage.username}'s CRM</SmallText>
        </HeaderTextContainer>
      </HeaderContainer>

      <div style={{ height: 400, width: "100%" }}>
        <Box p={1}>

          <Button style={{
          
            backgroundColor: "rgb(27, 79, 129)",
            padding: "15px 80px",
            margin: "10px",
         
          }}component={Link} to="/profile" variant="contained" startIcon={<PersonOutlineIcon />}>
            Profile
          </Button>
          <Button style={{

            padding: "15px 80px",
            margin: "10px",

          }}component={Link} to="/create" variant="outlined" startIcon={<AddCircleOutlineIcon />}>
            Add
          </Button>
        </Box>
        
        <DataGrid 
          disableExtendRowFullWidth={true}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onCellEditCommit={handleCellEditCommit}
          checkboxSelection = {false}

        />
        
      </div>
    </PageContainer>
  );
}



export default Home;
