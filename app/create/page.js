"use client";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { APIURL } from "../api/hello/users";
import FormatList from "@mui/icons-material/FormatListBulleted";

import { useRouter } from "next/navigation";
import Link from "next/link";


const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const sendData = async () => {
    if (firstName === "") {
      alert("give some data");
    }

    await axios.post(APIURL, {
      firstName,
      lastName,
      email,
      checked,
    });
    router.push("/read");
  };

  return (
    <>
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
        <Typography variant="h4" margin={5}>
          Create Your Account
        </Typography>

        <Stack spacing={2}>
          <Box>
            <TextField
              id="outlined-basic"
              label="FirstName"
              name="fname"
              onChange={(e) => setFirstName(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="LastName"
              name="lname"
              onChange={(e) => setLastName(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="E-mail"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box>
            <Typography>Status</Typography>
            <Checkbox onChange={(e) => setChecked(e.target.value)} />
          </Box>
          <Box>
            <Button variant="contained" onClick={sendData}>
              Create
            </Button>
          </Box>
        </Stack>
      </Box>
      <Link href={"/read"}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          startIcon={<FormatList />}
        >
          List of Users
        </Button>
      </Link>
    </>
  );
};
export default Create;
