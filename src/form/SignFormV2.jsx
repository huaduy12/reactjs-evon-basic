import { Form, Formik, useField } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Fist name required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "First Name must be less than or equal 20 characters";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Last name required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Last Name must be less than or equal 20 characters";
//   }
//   return errors;
// };

const SignFormV2 = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       firstName: "",
  //       lastName: "",
  //     },
  //     // validate,
  //     validationSchema: Yup.object({
  //       firstName: Yup.string()
  //         .max(20, "First Name must be less than or equal 20 characters")
  //         .required("Fist name required"),
  //       lastName: Yup.string()
  //         .max(20, "Last Name must be less than or equal 20 characters")
  //         .required("Last name required"),
  //     }),
  //     onSubmit: (values) => {
  //       console.log(values);
  //     },
  //   });
  // console.log(formik);

  return (
    <Formik
      className="p-10 w-full max-w-[500px] mx-auto"
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "First Name must be less than or equal 20 characters")
          .required("Fist name required"),
        lastName: Yup.string()
          .max(20, "Last Name must be less than or equal 20 characters")
          .required("Last name required"),
        email: Yup.string()
          .email("Email not format")
          .required("Email required"),
        intro: Yup.string().required("Intro required"),
        job: Yup.string().required("Job required"),
        terms: Yup.boolean().oneOf([true], "Please select term"),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      <Form>
        <Myinput
          label="First name"
          id="firstName"
          name="firstName"
          placeholder="Enter the first name"
        ></Myinput>
        {/* <div className="flex flex-col gap-2">
          <label htmlFor="firstName">FirstName</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            className="p-4 rounded-md border border-gray-100"
            placeholder="Enter the first name"
          ></Field>

          <div className="text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div> */}
        <Myinput
          label="Last name"
          id="lastName"
          name="lastName"
          placeholder="Enter the last name"
        ></Myinput>

        <Myinput
          label="Email"
          id="email"
          name="email"
          placeholder="Enter the email"
        ></Myinput>

        <MyTextarea
          label="Intro"
          id="intro"
          name="intro"
          placeholder="Enter the intro"
        ></MyTextarea>
        {/* <div className="flex flex-col gap-2">
          <label htmlFor="intro">Intro</label>
          <Field
            type="text"
            id="intro"
            name="intro"
            className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
            placeholder="Enter the intro"
            as="textarea"
          ></Field>

          <div className="text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div> */}

        <MySelectbox label="Select your job" name="job">
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </MySelectbox>

        {/* <div className="flex flex-col gap-2">
          <label htmlFor="job">Select your job</label>
          <Field
            type="text"
            id="job"
            name="job"
            className="p-4 rounded-md border border-gray-100"
            placeholder="Enter the job"
            as="select"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </Field>

          <div className="text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div> */}

        <MyCheckbox name="terms">
          <p>I accept the term and conditions</p>
        </MyCheckbox>
        {/* <div className="flex gap-2 items-center mb-5">
          <Field
            type="checkbox"
            name="terms"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <p>I accept the term and conditions</p>

          <div className="text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div> */}

        <div className="my-3 text-center">
          <button
            type="submit"
            className="rounded-md border border-gray-100 bg-blue-600 text-white w-full"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const Myinput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      ></input>

      {meta.touched && meta.error ? (
        <div className="text-red-500">
          <div className="text-sm text-red-300">{meta?.error}</div>
        </div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="textarea"
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...props}
        {...field}
      ></input>

      {meta.touched && meta.error ? (
        <div className="text-red-500">
          <div className="text-sm text-red-300">{meta?.error}</div>
        </div>
      ) : null}
    </div>
  );
};

const MySelectbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      ></select>

      {meta.touched && meta.error ? (
        <div className="text-red-500">
          <div className="text-sm text-red-300">{meta?.error}</div>
        </div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="p-4 rounded-md border border-gray-100"
          {...props}
          {...field}
        ></input>
        {children}
      </div>

      {meta.touched && meta.error ? (
        <div className="text-red-500">
          <div className="text-sm text-red-300">{meta?.error}</div>
        </div>
      ) : null}
    </div>
  );
};

export default SignFormV2;
