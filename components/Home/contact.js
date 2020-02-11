import React from "react";
import useFormal from "@kevinwolf/formal-web";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
});

const initialValues = {
  firstName: "Tony",
  lastName: "Stark",
  email: "ironman@avengers.io"
};

export default function ContactPage() {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => console.log("Your values are:", values)
  });

  return (
    <form {...formal.getFormProps()}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...formal.getFieldProps("firstName")} type="text" />
        {form.errors.firstName && <div>{form.errors.firstName}</div>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input {...formal.getFieldProps("lastName")} type="text" />
        {form.errors.lastName && <div>{form.errors.lastName}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input {...formal.getFieldProps("email")} type="text" />
        {form.errors.email && <div>{form.errors.email}</div>}
      </div>

      <button {...formal.getSubmitButtonProps()} type="submit">
        Submit
      </button>
    </form>
  );
}
