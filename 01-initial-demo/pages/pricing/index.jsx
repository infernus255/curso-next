import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

const PrincingPage = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h2 className={"title"}>
        {/* Go to <a href="/">Pricing</a> */}
        Go to <Link href="/">Home</Link>
      </h2>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  );
};

export default PrincingPage;
