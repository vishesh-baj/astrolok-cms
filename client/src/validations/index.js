import * as yup from "yup";

export const loginSchema = () => {
  return yup.object({
    userName: yup
      .string("username must be a string")
      .min(3, "username cannot be less than three characters")
      .max(32, "username cannot exceed 24 characters")
      .required("username is required"),
    password: yup
      .string("password must be a string")
      .min(6, "password should be atleasy 6 characters long")
      .required("password is required"),
  });
};

export const signupSchema = () => {
  return yup.object({
    name: yup
      .string("name must be a string")
      .min(3, "name must contain atleast 3 characters ")
      .required("name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    number: yup
      .string()
      .matches(/^\+?[0-9]{1,}$/g, "Invalid phone number")
      .min(10, "enter valid number")
      .max(10, "enter valid number")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(3, "password cannot be less than 3 characters")
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
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
