import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Link from "next/link";
import "../layout/css/team.css";

function Sponsors() {
  return (
    <MDBContainer>
      <h2 className="h2-responsive font-weight-bold text-center my-5">
        Top Sponsors
      </h2>
      <MDBRow>
        <MDBCol>
          <MDBCard wide className="sponsor-card m-2">
            <MDBCardImage
              cascade
              className="img-fluid my-5"
              src={require("../images/sponsors/vermeer.jpg")}
            />
            <MDBCardBody
              cascade
              className="text-center m-2 success-color-dark w-100"
            >
              <MDBCardTitle className="h3-responsive font-weight-bold white-text">
                Vermeer Corporation
              </MDBCardTitle>
              <MDBCardText className="white-text">
                "Equipped to do more"
              </MDBCardText>
              <Link href="https://www.vermeer.com/NA/en/N/about_us">
                <a target="_blank">
                  <MDBBtn
                    outline
                    color="white"
                    className="d-block mx-auto mt-2"
                  >
                    Learn more about Vermeer
                  </MDBBtn>
                </a>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide className="sponsor-card m-2">
            <MDBCardImage
              cascade
              className="img-fluid my-5"
              src={require("../images/sponsors/pella.png")}
            />
            <MDBCardBody cascade className="text-center m-2 success-color-dark w-100 ">
              <MDBCardTitle className="h3-responsive font-weight-bold white-text">
                Pella Corporation
              </MDBCardTitle>
              <MDBCardText className="white-text">
                "Perfectly Beautiful"
              </MDBCardText>
              <Link href="https://professional.pella.com/about/about-pella-corporation">
                <a target="_blank">
                  <MDBBtn
                    outline
                    color="white"
                    className="d-block mx-auto mt-2"
                  >
                    Learn more about Pella
                  </MDBBtn>
                </a>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <hr className="my-5 hr-dark" />
    </MDBContainer>
  );
}

export default Sponsors;
