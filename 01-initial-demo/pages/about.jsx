import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <h2 className={"title"}>
        {/* Go to <a href="/">Home</a> */}
        Go to <Link href="/">Home</Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>
    </MainLayout>
  );
};
export default AboutPage;
