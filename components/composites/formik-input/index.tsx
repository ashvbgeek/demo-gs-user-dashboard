import React from "react";
import { Input } from "../inputs";
import { Field } from "formik";

export interface IFormikInputFieldProps {
  name: string;
  title?: string;
  validate?: any;
  type?: "text" | "password" | "textarea";
  titleAction?: React.ReactNode;
  errorMessage?: string;
}

interface IFieldRenderProps {
  field: {
    name: string;
    onBlur: any;
    onChange: any;
    value: string;
  };
  form: {
    setFieldValue: (name: string, value: any) => void;
  };
}

export const FormikInputField = ({
  validate,
  name,
  title,
  type,
  titleAction,
  errorMessage,
}: IFormikInputFieldProps) => {
  return (
    <>
      <Field
        name={name}
        validate={validate ? validate : undefined}
        render={(renderProps: IFieldRenderProps) => {
          return (
            <>
              <Input
                title={title}
                type={type ? type : "text"}
                name={renderProps?.field?.name}
                titleAction={titleAction}
                value={renderProps?.field?.value}
                onChange={(e: any) => {
                  renderProps?.form?.setFieldValue(
                    renderProps?.field?.name,
                    e?.target?.value
                  );
                }}
                errorMessage={errorMessage}
              />
            </>
          );
        }}
      />
    </>
  );
};
