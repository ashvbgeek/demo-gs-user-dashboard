import { NextPage } from "next";
import HomePage from "../../components/home-page";
import Layout2 from "../../components/layout/layout2";

const Home: NextPage = () => {
  return (
    <>
      <Layout2>
        <HomePage />
      </Layout2>
    </>
  );
};

export default Home;
