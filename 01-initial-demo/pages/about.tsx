import Link from "next/link";
import { ReactNode } from "react";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h2 className={"title"}>
        {/* Go to <a href="/">Home</a> */}
        Go to <Link href="/">Home</Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
