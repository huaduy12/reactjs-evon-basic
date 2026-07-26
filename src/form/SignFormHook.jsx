import { useController, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { zodResolver } from "@hookform/resolvers/zod";
// import * as Yup from "yup";
import { z } from "zod";
import { useEffect } from "react";

// const schameValidation = Yup.object({
//   firstName: Yup.string()
//     .required("First name required")
//     .max(10, "First name max 10 character"),
// });

const schameValidation = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(10, "First name max 10 character"),
  lastName: z.string(),
  // email: z.string(),
});

const SignFormHook = () => {
  const {
    register,
    watch,
    reset,
    // resetField,
    handleSubmit,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    resolver: zodResolver(schameValidation),
    mode: "onChange",
  });
  console.log(isSubmitting);

  const onSubmitForm = async (values) => {
    console.log(values);

    if (isValid) {
      console.log("send data backend");
      // reset({
      //   firstName: "Defautl1",
      //   lastName: "Default2",
      //   email: "Default3",
      // });
      setFocus("firstName");
      reset();

      // resetField("firstName");
    }
  };

  const handleSetData = () => {
    setValue("firstName", "Test1", { shouldValidate: true });
    setValue("lastName", "Test2", { shouldValidate: true });
    setValue("email", "Test3", { shouldValidate: true });
  };
  // console.log(errors);
  const showAge = watch("showAge");

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
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
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 20,
          // })}
          {...register("firstName")}
        ></input>
        {errors?.firstName && (
          <div className="text-red-400 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-400 text-sm">
            Please không nhập quá first name 20 ký tự
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="p-4 rounded-md border border-gray-100"
          placeholder="Enter the last name"
          {...register("lastName")}
        ></input>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <MyInput
          name="email"
          id="email"
          placeholder="Enter the email"
          control={control}
        ></MyInput>
        {/* <input
          type="text"
          id="email"
          name="email"
          className="p-4 rounded-md border border-gray-100"
          placeholder="Enter the email"
          {...register("email")}
        ></input> */}
      </div>

      <input type="checkbox" {...register("showAge")} />
      {showAge && (
        <input type="number" name="" id="" placeholder="Please enter age" />
      )}

      <div className="my-3 text-center">
        <button
          type="submit"
          className="rounded-md border border-gray-100 bg-blue-600 text-white w-full"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
        <button
          type="button"
          className="mt-5 rounded-md border border-gray-100 bg-blue-600 text-white w-full"
          onClick={handleSetData}
        >
          Set data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => {
//         return (
//           <input
//             className="p-4 rounded-md border border-gray-300"
//             {...field}
//             {...props}
//           ></input>
//         );
//       }}
//     ></Controller>
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control: control,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-300"
      {...field}
      {...props}
    ></input>
  );
};

export default SignFormHook;
