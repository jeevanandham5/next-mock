"use client";

import { Typography } from "@mui/material";
import Create from "./create/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h2">Next.js CRUD-MOCK-API</Typography>
      <Create />
    </main>
  );
}
