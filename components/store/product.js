import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
  MDBBtn,
  MDBIcon
} from "mdbreact";

export default function(props) {
  return (
    <MDBCard style={{ width: "22rem" }} cascade ecommerce>
      <MDBCardImage cascade top src={props.image} waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">{props.category}</MDBCardTitle>
        <MDBCardTitle>
          <a href="#!">
            <strong>{props.productName}</strong>
          </a>
        </MDBCardTitle>
        <MDBCardText>{props.description}</MDBCardText>
        <MDBCardFooter>
          <span className="float-left">49$</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn
                tag="a"
                color="transparent"
                size="lg"
                className="p-1 m-0 mr-2 z-depth-0"
              >
                <MDBIcon icon="shopping-cart" />
              </MDBBtn>
              <div>Add to Cart</div>
            </MDBTooltip>
            <MDBTooltip placement="top">
              <MDBBtn
                tag="a"
                href="https://mdbootstrap.com"
                target="_blank"
                color="transparent"
                size="lg"
                className="p-1 m-0 mr-2 z-depth-0"
              >
                <MDBIcon icon="share-alt" />
              </MDBBtn>
              <div>Share</div>
            </MDBTooltip>

            <MDBBtn
              tag="a"
              size="lg"
              className="p-1 m-0 z-depth-0"
            >
              Buy Now
            </MDBBtn>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}
