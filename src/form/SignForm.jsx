import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Fist name required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "First Name must be less than or equal 20 characters";
  }
  if (!values.lastName) {
    errors.lastName = "Last name required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Last Name must be less than or equal 20 characters";
  }
  return errors;
};
const SignForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="p-4 rounded-md border border-gray-100"
          placeholder="Enter the first name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500">{formik.errors.firstName}</div>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">LastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="p-4 rounded-md border border-gray-100"
          placeholder="Enter the last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500">{formik.errors.lastName}</div>
        ) : (
          ""
        )}
      </div>

      <div className="my-3 text-center">
        <button
          type="submit"
          className="rounded-md border border-gray-100 bg-blue-600 text-white w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignForm;
<div>
  <label htmlFor=""></label>
</div>;
