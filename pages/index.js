import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Team from "../components/team"; 

const Home = () => (
  <div>
    <Layout>
      <div>
        <Intro></Intro>
        <Team></Team>
      </div>
    </Layout>
  </div>
);

export default Home;
