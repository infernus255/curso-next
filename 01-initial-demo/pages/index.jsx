import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h2 className={"title"}>
        {/* Go to <a href="/about">About</a> */}
        Go to <Link href="/about">About</Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.jsx</code>
      </p>
    </MainLayout>
  );
};
export default HomePage;
