import React from "react";
import Layout from "../components/layout";
import Intro from "../components/Home/intro";
import Team from "../components/Home/team";
import Statements from "../components/Home/Statements";
import Sponsors from "../components/Home/sponsors";
import ContactPage from "../components/Home/contact";

const Home = () => (
  <div>
    <Layout>
      <Intro></Intro>
      <Team></Team>
      <Statements></Statements>
      <Sponsors></Sponsors>
      <ContactPage></ContactPage>
    </Layout>
  </div>
);

export default Home;
