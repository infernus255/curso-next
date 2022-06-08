import styles from "./MainLayout.module.css";
import { NavBar } from "../NavBar/NavBar";
import Head from "next/head";

import { FC } from "react";

interface Props {
  children?: React.ReactNode | undefined;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
