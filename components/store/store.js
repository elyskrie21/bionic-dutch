import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Product from "./product";

const Store = () => {
  return (
    <div>
      <section className="success-color-dark pb-3 mb-3">
        <h2 className="h1-responsive font-weight-bold text-center pt-5">
          Our Merchandise
        </h2>
        <p className="text-center w-responsive mx-auto">
          All proceeds will go to support the Pella Bionic Dutch
        </p>
      </section>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="4" md="6" className="mb-4">
            <Product
              category="shoe"
              productName="Hat"
              description="This is a test"
              image="https://images.pexels.com/photos/67603/pexels-photo-67603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></Product>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4">
            <Product
              category="shoe"
              productName="Shirt"
              description="This is a test"
              image="https://cdn.stocksnap.io/img-thumbs/960w/O6FFZNFK7X.jpg"
            ></Product>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4">
            <Product
              category="shoe"
              productName="Keychain"
              description="This is a test"
              image="https://images.pexels.com/photos/1194036/pexels-photo-1194036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></Product>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4" md="6" className="mb-4">
            <Product
              category="shoe"
              productName="Pins"
              description="This is a test"
              image="https://images.pexels.com/photos/632656/pexels-photo-632656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></Product>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4">
            <Product
              category="shoe"
              productName="Cool sweatshirt"
              description="This is a test"
              image="https://images.pexels.com/photos/1480693/pexels-photo-1480693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></Product>
          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-4">
            <Product
              category="shoe"
              productName="Bag"
              description="This is a test"
              image="https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></Product>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Store;
