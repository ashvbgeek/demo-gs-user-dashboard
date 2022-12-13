import React from "react";
import {
  Box,
  Text,
  Textarea as CTextarea,
  TextareaProps as CTextareaProps,
} from "@chakra-ui/react";

export interface ITextArea
  extends CTextareaProps,
    Omit<ITextareaWrapperProps, "children"> {}

export const TextArea = (props: ITextArea) => {
  const { title, errorMessage } = props;

  return (
    <>
      <TextareaWrapper title={title} errorMessage={errorMessage}>
        <CTextarea p="16px" height="56px" {...props} />
      </TextareaWrapper>
    </>
  );
};

export interface ITextareaWrapperProps {
  title?: string;
  errorMessage?: string;
  children?: React.ReactNode;
}

export const TextareaWrapper = (props: ITextareaWrapperProps) => {
  const { title, errorMessage, children } = props;
  return (
    <>
      <Box>
        {title && (
          <Text fontWeight="500" mb="8px" fontSize="md">
            {title}
          </Text>
        )}

        {children}

        {errorMessage && (
          <Text fontSize="xs" color="red.500" pl={2}>
            {errorMessage}
          </Text>
        )}
      </Box>
    </>
  );
};
