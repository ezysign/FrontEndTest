import React from "react";
// import * as yup from "yup";
import {  useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import { Button, Flex } from "../../../@ui";
import { Input } from "../../../@ui/Form";
import LoginWrapper from "./Login.style";

import { actions } from "../../../store/ducks/auth.duck";

// const LoginSchema = yup.object().shape({
//   email: yup
//     .string()
//     .min(5)
//     .max(100)
//     .email()
//     .required(),
//   password: yup
//     .string()
//     .min(6)
//     .max(100)
//     .required()
// });

const Login = () => {
  const dispatch = useDispatch();


  const onSubmit = async data => {
    dispatch(actions.login(data));
  };


  return (
    <LoginWrapper>
      <Flex align="center" justify="center" direction="column">
       
        <h2 className="text--bold">Welcome!</h2>

        <Formik
          initialValues={{
            email: "eve.holt@reqres.in",
            password: "cityslicka"
          }}
          onSubmit={(values, actions) => {

            onSubmit(values)
            actions.setSubmitting(false)

          }}
        >
          {({ handleChange, handleBlur, isSubmitting, values }) => (
            <Form>
              <Field
                type="email"
                name="email"
                value={values.email}
                placeholder="name@gmail.com"
                component={Input}
                icon="envelope"

              // errors={""}
              />
              <Field
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                component={Input}
                icon="lock"

              // errors={""}
              />

              <Button
                isLoading={isSubmitting}
                disable
                type="submit"
                width="50%"
              // icon="arrow-right"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>

      </Flex>
    </LoginWrapper>
  );
};

export default Login;
