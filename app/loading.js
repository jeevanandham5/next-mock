"use client";
import { CircularProgress, Typography } from "@mui/material";
import styles from "./page.module.css";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className={styles.main}>
      <CircularProgress />
      <Typography variant="h1" sx={{ fontSize: "100px", color: "blue" }}>
        loding.....
      </Typography>
    </main>
  );
}
