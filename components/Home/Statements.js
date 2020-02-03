import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import Link from "next/link";

const Statements = () => {
  return (
    <MDBContainer>
      <section className="my-5">
        <h2 className="h2-responsive font-weight-bold text-center my-5">
          Team Statements
        </h2>
        <p className="grey-text w-responsive text-center mx-auto mb-5">
          We are striving to reach our full potential and give 100% on
          everything we do. We are expecting to have gracious professionalism
          during tournaments and in our practices.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src={require("../images/individual-photos/statement-pic.jpg")}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon
                  far
                  icon="chart-bar"
                  size="2x"
                  className="indigo-text"
                />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Goals</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="music" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Mission</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">
                  Pella Community School
                </h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <Link href="https://www.firstinspires.org/robotics/ftc">
          <a target="_blank">
            <MDBBtn outline color="success" className="d-block mx-auto mt-2">
              Learn more about First Tech Challenge
            </MDBBtn>
          </a>
        </Link>
        <hr className="my-5 hr-dark" />
      </section>
    </MDBContainer>
  );
};

export default Statements;
