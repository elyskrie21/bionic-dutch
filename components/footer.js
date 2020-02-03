import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3 elegant-color-dark">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a className="font-weight-bold">Pella Bionic Dutch </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;