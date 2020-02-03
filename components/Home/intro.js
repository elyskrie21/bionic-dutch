import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";

class Intro extends React.Component {
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );

    return (
      <div id="apppage">
        <MDBMask className="d-flex justify-content-center align-items-center success-color-dark">
          <MDBContainer className="w-100">
            <MDBRow className="text-center">
              <MDBCol
                md="6"
                className="white-text text-center text-md-left mt-xl-5 mb-5"
              >
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5 w-75">
                    Pella Bionic Dutch
                  </h1>
                  <hr className="hr-light" />
                  <h3>Gracious Professionalism</h3>
                  <h6 className="mb-4">
                    We are striving to reach our full potential and give 100% on
                    everything we do. We are a very motivated team and we show
                    gracious professionalism during tournaments and in our practices.
                  </h6>
                  <MDBBtn color="white">About Us</MDBBtn>
                  <MDBBtn outline color="white">
                    Sponsors
                  </MDBBtn>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src={require('../images/intro-pics/pic.jpg')}
                    alt=""
                    className="img-fluid"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </div>
    );
  }
}

export default Intro;
