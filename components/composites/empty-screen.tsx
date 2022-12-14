import React from "react";
import { Flex, Text, Box, FlexProps, BoxProps, Image } from "@chakra-ui/react";

interface IEmptyScreen {
  title: string;
  desc: string;
  imageURL?: string;
  actionButton?: React.ReactNode;
  flexProps?: FlexProps;
  imageBoxProps?: BoxProps;
}

const EmptyScreen = ({
  title,
  desc,
  imageURL,
  actionButton,
  flexProps,
  imageBoxProps,
}: IEmptyScreen) => {
  return (
    <>
      <Flex align="center" justify="center" {...flexProps}>
        <Box width="100%" maxWidth="420px" mx="auto" p={4} textAlign="center">
          <Box
            width="100%"
            maxWidth="160px"
            position="relative"
            textAlign="center"
            mx="auto"
            {...imageBoxProps}
          >
            {imageURL ? (
              <>
                <Image mx="auto" maxWidth="160px" src={imageURL} alt={title} />
              </>
            ) : (
              <></>
            )}
          </Box>
          <Text mt={4} fontWeight={700} fontSize={["lg"]}>
            {title}
          </Text>
          <Text mt={1} color="#6A6A6A" fontSize="sm">
            {desc}
          </Text>
          {actionButton ? (
            <>
              <Box mt={7}>{actionButton}</Box>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default EmptyScreen;
