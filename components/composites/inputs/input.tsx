import React from "react";
import {
  Box,
  Text,
  Input as CInput,
  InputProps as CInputProps,
  Flex,
} from "@chakra-ui/react";
import { FormikErrors } from "formik";

export interface IInput
  extends CInputProps,
    Omit<IInputWrapperProps, "children"> {}

export const Input = (props: IInput) => {
  const { title, errorMessage } = props;

  return (
    <>
      <InputWrapper title={title} errorMessage={errorMessage}>
        <CInput p="16px" height="56px" colorScheme="primary" {...props} />
      </InputWrapper>
    </>
  );
};

export interface IInputWrapperProps {
  title?: string;
  titleAction?: React.ReactNode;
  errorMessage?: string | string[] | FormikErrors<any> | FormikErrors<any[]>;
  children?: React.ReactNode;
}

export const InputWrapper = (props: IInputWrapperProps) => {
  const { title, errorMessage, children, titleAction } = props;
  return (
    <>
      <Box w="100%">
        <Flex justify="space-between">
          <Box>
            {title && (
              <Text fontWeight="500" mb="8px" fontSize="md">
                {title}
              </Text>
            )}
          </Box>

          <Box pl={2}>{titleAction}</Box>
        </Flex>

        {children}

        {errorMessage && (
          <Text fontSize="xs" color="red.500" pl={2}>
            {typeof errorMessage === "string" ? errorMessage : ""}
          </Text>
        )}
      </Box>
    </>
  );
};
