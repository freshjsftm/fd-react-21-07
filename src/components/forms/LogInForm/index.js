import React from "react";
import { Field, Form, Formik } from "formik";
import { SCHEMA_LOGIN } from "../../../utils/validateSchemas";
import styles from "./LogInForm.module.scss";
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
        console.log(formikProps)
        return (
          <Form className={styles.container}>
            <Field name="login" />
            {formikProps.errors.login && formikProps.touched.login && (
              <span>{formikProps.errors.login}</span>
            )}
            <Field name="password" />
            {formikProps.errors.password && formikProps.touched.password && (
              <span>{formikProps.errors.password}</span>
            )}
            <input type="submit" />
            <input type="reset" />
          </Form>
        );
      }}
    </Formik>
  );
};
export default LogInForm;
