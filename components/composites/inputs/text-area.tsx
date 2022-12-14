import React from "react";
import {
  Box,
  Text,
  Textarea as CTextarea,
  TextareaProps as CTextareaProps,
  Flex,
} from "@chakra-ui/react";

export interface ITextArea
  extends CTextareaProps,
    Omit<ITextareaWrapperProps, "children"> {}

export const TextArea = (props: ITextArea) => {
  const { title, errorMessage, titleAction } = props;

  return (
    <>
      <TextareaWrapper
        title={title}
        errorMessage={errorMessage}
        titleAction={titleAction}
      >
        <CTextarea
          borderWidth="0.5px"
          fontSize="sm"
          py={2}
          px={3}
          colorScheme="primary"
          {...props}
        />
      </TextareaWrapper>
    </>
  );
};

export interface ITextareaWrapperProps {
  title?: string;
  errorMessage?: string;
  children?: React.ReactNode;
  titleAction?: React.ReactNode;
}

export const TextareaWrapper = (props: ITextareaWrapperProps) => {
  const { title, errorMessage, children, titleAction } = props;
  return (
    <>
      <Box>
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
            {errorMessage}
          </Text>
        )}
      </Box>
    </>
  );
};
