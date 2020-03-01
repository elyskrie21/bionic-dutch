import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBAnimation,
  MDBTypography
} from "mdbreact";
import Link from "next/link";

const Statements = () => {
  return (
    <MDBContainer>
      <section className="my-5">
        <h2 className="h2-responsive font-weight-bold text-center my-5">
          Team Statements
        </h2>
        <p className="w-responsive text-center mx-auto mb-5">
          We are striving to reach our full potential and give 100% on
          everything we do. We are expecting to have gracious professionalism
          during tournaments and in our practices.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://i.imgur.com/MteoS2A.jpg"
              alt=""
              className="img-fluid rounded z-depth-2"
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
                <ul>
                  <li>Team and relationship building</li>
                  <li>
                    To gain knowledge in robotics and engineering design
                    principles
                  </li>
                  <li>To apply our skills in many real life problems</li>
                  <li>To have fun!</li>
                </ul>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="bullseye" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Mission</h5>
                <p>
                  Our team mission is to improve our knowledge and team building
                  skills in order to apply our problem solving skills to design
                  an engineered product.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="book" size="2x" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">
                  Pella Community School
                </h5>
                <p>
                  Pursuing excellence, building caring relationships, and
                  respecting and developing every child's potential.
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
