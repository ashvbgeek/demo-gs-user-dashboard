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
  const { title, errorMessage, titleAction } = props;

  return (
    <>
      <InputWrapper
        title={title}
        errorMessage={errorMessage}
        titleAction={titleAction}
      >
        <CInput
          borderWidth="0.5px"
          fontSize="sm"
          py={2}
          px={3}
          colorScheme="primary"
          {...props}
        />
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
              <Text
                fontSize="xs"
                fontWeight="600"
                textTransform="uppercase"
                mb={1}
              >
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
