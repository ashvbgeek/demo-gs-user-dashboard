import React from "react";
import ReactSelect from "react-select";
import { IInputWrapperProps, InputWrapper } from "./input";
import { useField } from "formik";
import CSelect from "react-select/creatable";

interface ISelect extends IInputWrapperProps {
  options: Array<{ value: string | number; label: string | number }> | any[];
  name: string;
  placeholder?: string;
  isFormikField?: boolean;
  reactSelectProps?: React.ComponentProps<typeof ReactSelect>;
}

export const Select = (props: ISelect) => {
  const { title, errorMessage, name, placeholder, isFormikField } = props;

  return (
    <InputWrapper title={title} errorMessage={errorMessage}>
      {isFormikField ? (
        <FormikReactSelect {...props} />
      ) : (
        <ReactSelect
          classNamePrefix="customReactSelectStyles"
          options={props?.options}
          name={name}
          placeholder={placeholder}
          {...props?.reactSelectProps}
        />
      )}
    </InputWrapper>
  );
};
export const CreatableSelect = (props: ISelect) => {
  const { title, errorMessage, name, placeholder, isFormikField } = props;

  return (
    <InputWrapper title={title} errorMessage={errorMessage}>
      {isFormikField ? (
        <FormikReactSelect {...props} />
      ) : (
        <CSelect
          classNamePrefix="customReactSelectStyles"
          options={props?.options}
          name={name}
          placeholder={placeholder}
          {...props?.reactSelectProps}
        />
      )}
    </InputWrapper>
  );
};

const FormikReactSelect = (props: ISelect) => {
  const { name, placeholder } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <ReactSelect
        classNamePrefix="customReactSelectStyles"
        options={props?.options}
        name={name}
        placeholder={placeholder}
        value={field?.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        {...props?.reactSelectProps}
      />
    </>
  );
};
