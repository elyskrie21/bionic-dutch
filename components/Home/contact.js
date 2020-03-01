import React from "react";
import * as yup from "yup";
import useFormal from "@kevinwolf/formal";

import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  name: yup.string().required(),
  message: yup.string().required()
});

const initialValues = {
  email: "",
  name: " ",
  message: " "
};

export default function ContactPage() {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values =>
      fetch("/send-email", {
        method: "POST",
        headers: {'Content-Type': 'application/json;charset=utf-8'}, 
        body: JSON.stringify(values)
      })
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          console.log(myJson, values);
          document.getElementById('form').reset(); 
        })
  });

  const handleSubmit = e => {
    e.preventDefault();
    formal.submit();
  };

  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        If you have any questions just contact us below!
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header accent-1 text-center">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text text-center">
                We'll respond as fast a possible!
              </p>
              <form onSubmit={handleSubmit} className="pt-2" id='form'>
                <div className="grey-text">
                  <MDBInput
                    label="Email"
                    type="text"
                    id="email"
                    name="email"
                    icon="envelope"
                    value={formal.values.email}
                    onChange={e => formal.change("email", e.target.value)}
                  />
                  {formal.errors.email && <div>{formal.errors.email}</div>}
                  <MDBInput
                    label="Your Name"
                    type="text"
                    id="name"
                    name="name"
                    icon="user"
                    value={formal.values.name}
                    onChange={e => formal.change("name", e.target.value)}
                  />
                  {formal.errors.name && (
                    <div>{formal.errors.name}</div>
                  )}

                  <MDBInput
                    label="Your Message"
                    type="textarea"
                    id="message"
                    name="message"
                    rows="2"
                    icon="pencil-alt"
                    value={formal.values.message}
                    onChange={e => formal.change("message", e.target.value)}
                  />
                  {formal.errors.message && <div>{formal.errors.message}</div>}
                </div>

                <div className="text-center">
                  <MDBBtn outline type="submit" color="primary">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded  z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7727235536663!2d-92.90497234890586!3d41.400741879161146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ef307f27372037%3A0xa9c56909e2877d67!2sPella%20High%20School!5e0!3m2!1sen!2spl!4v1582598075530!5m2!1sen!2spl"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="green" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Pella IA, 50219</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="green" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>(641)-628-1111</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="green" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>bionicdutch@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
