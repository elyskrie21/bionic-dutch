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

function Sponsors() {
  return (
    <MDBContainer>
      <h2 className="h2-responsive font-weight-bold text-center my-5">
        Top Sponsors
      </h2>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage
              cascade
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
            />
            <MDBCardBody cascade className="text-center m-2">
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="https://google.com" target="_Blank">
                MDBBtn
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage
              cascade
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
            />
            <MDBCardBody cascade className="text-center m-2">
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <hr className="my-5 hr-dark" />
    </MDBContainer>
  );
}

export default Sponsors;
