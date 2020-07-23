import * as yup from 'yup'
// bring validation here

const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    password: yup
      .string()
      .min(6, "Password must have atleast 6 characters"),
    terms: yup
         .boolean()
          .oneOf([true], "Terms must be accepted")
  });

  export default formSchema