import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBIcon
} from "mdbreact";

const BronzeSponsor = () => {
  return (
    <MDBCard>
      <MDBCardImage
        className="blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded"
        tag="div"
      >
        <h2>Marta</h2>
        <p>Deserves her own card</p>
      </MDBCardImage>
      <MDBCardBody cascade className="text-center">
        <MDBCardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
          dignissimos neque rem nihil ratione est placeat vel, natus non quos
          laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.
        </MDBCardText>
        <hr />
        <div className="text-center">
          <MDBIcon fab icon="twitter" className="tw-ic mr-3" size="lg" />
          <MDBIcon fab icon="linkedin-in" className="li-ic my-3" size="lg" />
          <MDBIcon fab icon="facebook-f" className="fb-ic ml-3" size="lg" />
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BronzeSponsor; 
