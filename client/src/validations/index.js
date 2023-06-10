import * as yup from "yup";

export const loginSchema = () => {
  return yup.object({
    userName: yup
      .string("username must be a string")
      .min(3, "username cannot be less than three characters")
      .max(24, "username cannot exceed 24 characters")
      .required("username is required"),
    password: yup
      .string("password must be a string")
      .min(6, "password should have minimum of 6 characters")
      .required("password is required"),
  });
};

export const signupSchema = () => {
  return yup.object({
    name: yup
      .string("name must be a string")
      .min("name must contain atleast 3 characters ")
      .required("name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .min(3, "password cannot be less than 3 characters")
      .required("password is required"),
  });
};

export const forgetPasswordSchema = () => {
  return yup.object({
    email: yup
      .string()
      .email("invalid email")
      .required("email cannot be empty string"),
  });
};
