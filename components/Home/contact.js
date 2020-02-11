import React from "react";
import * as yup from "yup";
import useFormal from "@kevinwolf/formal";

import {MDBContainer} from "mdbreact"; 
 
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
});
 
const initialValues = {
  firstName: " ",
  lastName: " ",
  email: " "
};
 
export default function ContactPage() {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => console.log("Your values are:", values)
  });
 
  const handleSubmit = e => {
    e.preventDefault();
    formal.submit();
  };
 
  return (
      <MDBContainer>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formal.values.firstName}
          onChange={e => formal.change("firstName", e.target.value)}
        />
        {formal.errors.firstName && <div>{formal.errors.firstName}</div>}
      </div>
 
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formal.values.lastName}
          onChange={e => formal.change("lastName", e.target.value)}
        />
        {formal.errors.lastName && <div>{formal.errors.lastName}</div>}
      </div>
 
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formal.values.email}
          onChange={e => formal.change("email", e.target.value)}
        />
        {formal.errors.email && <div>{formal.errors.email}</div>}
      </div>
 
      <button type="submit">Submit</button>
    </form>
    </MDBContainer>
  );
}