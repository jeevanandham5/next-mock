"use client";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIURL } from "../api/hello/users";
import styles from "../page.module.css";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";


export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [id, setID] = useState("");

  const sendData = () => {
    axios.put(APIURL + id, {
      firstName,
      lastName,
      email,
      checked,
    });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setChecked(localStorage.getItem("checked"));
  }, []);

  return (
    <main className={styles.main}>
      <Box
        sx={{
          textAlign: "center",
          border: "2px solid #424242",
          borderRadius: "10px",
          padding: "50px",
          flexDirection: "column",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h4" sx={{ color: "#ef6c00" }}>
          Wellcome Back {firstName} {lastName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Avatar
            alt="img"
            src={"https://i.pravatar.cc/150?img=/" + id}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Typography variant="h5" margin={5}>
          Update Your Account
        </Typography>
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="FirstName"
            value={firstName}
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="LastName"
            value={lastName}
            name="lname"
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <Box>
            <Typography>Not a robot</Typography>
            <Checkbox onChange={(e) => setChecked(e.target.value)} />
          </Box>
          <Box>
            <Link href={"/read"}>
              <Button
                variant="contained"
                color="success"
                sx={{ margin: "10px" }}
                onClick={sendData}
                size="large"
                startIcon={<EditIcon />}
              >
                Update
              </Button>
            </Link>
            <Link href={"/read"}>
              <Button
                variant="contained"
                color="warning"
                sx={{ margin: "10px" }}
                size="large"
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </main>
  );
}
