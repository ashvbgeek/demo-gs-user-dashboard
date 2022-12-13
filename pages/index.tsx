import Head from 'next/head'
import Image from "next/image";
import { Layout } from "../components/layout";
import { Formik } from "formik";
import { FormikInputField } from "../components/composites";

export default function Home() {
  return (
    <Layout>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <>
            <FormikInputField name="firstName" title="First Name" />
          </>
        )}
      </Formik>
    </Layout>
  );
}
