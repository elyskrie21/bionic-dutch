import React, { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "../components/footer"; 

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./css/index.css"; 

const Layout = props => {
  return (
    <div>
      <Navbar></Navbar>
      <div>{props.children}</div>
      <Footer></Footer>
    </div>
  );
};

Layout.com;

export default Layout;