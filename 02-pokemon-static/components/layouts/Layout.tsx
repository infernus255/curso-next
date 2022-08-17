import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children?: React.ReactNode | undefined;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Eros Montevegna"></meta>
        <meta name="description" content={`Data about pokemon ${title}`}></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
