"use client";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIURL } from "../api/hello/users";
import styles from "../page.module.css";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

export default function Read() {
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    axios.get(APIURL).then((getData) => {
      setReadData(getData.data);
    });
    getData();
  }, []);

  const setData = (id, firstName, lastName) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  const getData = () => {
    axios.get(APIURL).then((getData) => {
      setReadData(getData.data);
    });
  };
  const onDelete = (id) => {
    axios.delete(APIURL + id).then(() => {
      getData();
    });
  };
  return (
    <main className={styles.main}>
      <Box
        sx={{
          background: "#e0e0e0",
          border: "2px solid #424242",
          padding: "10px",
          borderRadius: 10,
        }}
      >
        <Typography textAlign={"center"} variant="h2">
          Read
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h4">UserID</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h4">Profile</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h4">FirstName</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h4">LastName</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h4">Update</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h4">Delete</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {readData.map((data) => {
                return (
                  <TableRow key={data.id}>
                    <TableCell align="center">
                      <Typography variant="h5">{data.id}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Avatar
                        alt="img"
                        src={"https://i.pravatar.cc/150?img=/" + data.id}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h5">{data.firstName}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h5">{data.lastName}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Link href={"/update"}>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() =>
                            setData(data.id, data.firstName, data.lastName)
                          }
                          startIcon={<EditIcon />}
                        >
                          Update
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        variant="contained"
                        color="error"
                        onClick={() => onDelete(data.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Link href={"/"}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          startIcon={<HomeIcon />}
        >
          Back to Home
        </Button>
      </Link>
    </main>
  );
}
