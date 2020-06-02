import React from "react";
import Layout from "../components/layout/layout";
import { MDBContainer, MDBRow, MDBCol, MDBTabContent } from "mdbreact";
import BronzeSponsor from "../components/sponsors/bronze";

const Sponsors = () => {
  return (
    <Layout>
      <header className="success-color-dark pb-3 mb-3">
        <h2 className="h1-responsive font-weight-bold text-center pt-5">
          Sponsors
        </h2>
        <p className="text-center w-responsive mx-auto">
          Thank you to all the sponsors for supporting the team!
        </p>
      </header>
      <main>
        <section className="bronze-level">
          <MDBContainer>
            <MDBRow>
              <MDBCol sm="6" md="4">
                <BronzeSponsor></BronzeSponsor>
              </MDBCol>
              <MDBCol sm="6" md="4">
                <BronzeSponsor></BronzeSponsor>
              </MDBCol>
              <MDBCol sm="6" md="4">
                <BronzeSponsor></BronzeSponsor>
              </MDBCol>
              <MDBCol sm="6" md="4">
                <BronzeSponsor></BronzeSponsor>
              </MDBCol>
              <MDBCol sm="6" md="4">
                <BronzeSponsor></BronzeSponsor>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </main>
    </Layout>
  );
};

export default Sponsors;
