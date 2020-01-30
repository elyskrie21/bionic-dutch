import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const About = () => {
  return (
    <div>
      <Fragment>
        <MDBBtn color="primary">Primary</MDBBtn>
        <MDBBtn>Default</MDBBtn>
        <MDBBtn color="secondary">Secondary</MDBBtn>
        <MDBBtn color="success">Success</MDBBtn>
        <MDBBtn color="info">Info</MDBBtn>
        <MDBBtn color="warning">Warning</MDBBtn>
        <MDBBtn color="danger">Danger</MDBBtn>
      </Fragment>
    </div>
  );
};

export default About;
