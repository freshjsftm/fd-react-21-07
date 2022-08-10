import React from "react";
import { Form, Formik } from "formik";
import { SCHEMA_LOGIN } from "../../../utils/validateSchemas";
import styles from "./LogInForm.module.scss";
import InputInLabel from "../InputInLabel";
const initialValues = {
  login: "",
  password: "",
};
const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_LOGIN}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <InputInLabel name="login" type="text" placeholder="login" />
            <InputInLabel name="password" type="password"/>
            <input type="submit" />
            <input type="reset" />
          </Form>
        );
      }}
    </Formik>
  );
};
export default LogInForm;
