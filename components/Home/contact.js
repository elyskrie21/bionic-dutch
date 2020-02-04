import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer
} from "mdbreact";

import {useForm} from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <section className="contact-section my-5">
      <MDBContainer>
        <MDBCard>
          <MDBRow>
            <MDBCol lg="8">
              <MDBCardBody className="form">
                <h3 className="mt-4">
                  <MDBIcon icon="envelope" className="pr-2" />
                  Write to us:
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="form-contact-name"
                          label="Your name"
                          name="name"
                          ref={register}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="form-contact-email"
                          label="Your email"
                          name="email"
                          ref={register}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="form-contact-phone"
                          label="Your phone"
                          name="phone"
                          ref={register}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="form-contact-company"
                          label="Your company"
                          name="company"
                          ref={register}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="textarea"
                          id="form-contact-message"
                          label="Your message"
                          name="message"
                          ref={register}
                        />
                        <MDBBtn rounded color="blue" type="submit">
                          <MDBIcon icon="paper-plane" />
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4">
              <MDBCardBody className="contact text-center h-100 black-text">
                <h3 className="my-4 pb-2">Contact information</h3>
                <ul className="text-lg-left list-unstyled ml-4">
                  <li>
                    <p>
                      <MDBIcon icon="map-marker-alt" className="pr-2" />
                      212 E University St, Pella, IA 50219
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="phone" className="pr-2" /> (641) 628-3870
                    </p>
                  </li>
                  <li>
                    <p>
                      <MDBIcon icon="envelope" className="pr-2" />
                      bionicdutch@gmail.com
                    </p>
                  </li>
                </ul>
                <hr className="hr-light my-4" />
                <ul className="list-inline text-center list-unstyled">
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg w-ic">
                      <MDBIcon fab icon="facebook" />
                    </a>
                  </li>
                </ul>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </section>
  );
};

export default ContactPage;
