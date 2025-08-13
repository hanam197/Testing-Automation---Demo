import { LoginData } from "../src/models/login";

export const userData: LoginData[] = [
  {
    username: "standard_user",
    password: "secret_sauce",
    expectedResult: true,  // login thành công
  },
  {
    username: "standard_user",
    password: "secret_sauc",
    expectedResult: false, // login thất bại
    expectedErrorMessage:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "standard_user",
    password: "",
    expectedResult: false,
    expectedErrorMessage: "Epic sadface: Password is required",
  },
  {
    username: "",
    password: "secret_sauc",
    expectedResult: false,
    expectedErrorMessage: "Epic sadface: Username is required",
  },
  {
    username: "",
    password: "",
    expectedResult: false,
    expectedErrorMessage: "Epic sadface: Username is required",
  },
  {
    username: "locked_out_user",
    password: "secret_sauce",
    expectedResult: false,
    expectedErrorMessage: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    username: "problem_user",
    password: "secret_sauce",
    expectedResult: true,
  },
  {
    username: "performance_glitch_user",
    password: "secret_sauce",
    expectedResult: true,
  },
  {
    username: "error_user",
    password: "secret_sauce",
    expectedResult: true,
  },
  {
    username: "visual_user",
    password: "secret_sauce",
    expectedResult: true,
  },
];
