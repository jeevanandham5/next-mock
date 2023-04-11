"use client";

import { Button, Typography } from "@mui/material";
import Create from "./create/page";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h2">Next.js CRUD-MOCK-API</Typography>
      <Create />
      <Link href={"/voice"}>
        <Button variant="contained">voice</Button>
      </Link>
    </main>
  );
}
