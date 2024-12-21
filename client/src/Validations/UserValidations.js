import * as yup from "yup"; //import all exports from the yup

export const userSchemaValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Not valid email format")
      .required("Email is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),

      /*id: yup.string().required("ID is required"),  // Example validation for ID
      title: yup.string().required("Title is required"),  // Example validation for Title
      images: yup.string().url("Must be a valid URL").required("Image URL is required"),*/
});

  
  
  