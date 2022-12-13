import {
  Flex,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import { NextImage } from "../../primities";
import SideNavMenu from "./side-nav-menu";
import Styles from "./index.module.scss";
import Link from "next/link";

const SideNav = ({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}) => {
  return (
    <>
      <Box width="100%" maxWidth="360px">
        <Box className={Styles?.desktopOnly}>
          <SideNavWrapper />
        </Box>

        <Box className={Styles?.mobileOnly} position="relative" zIndex={1000}>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={() => {
              if (onClose) {
                onClose();
              }
            }}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody bg="red.200">
                <SideNavWrapper onClose={onClose} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default SideNav;

const SideNavWrapper = ({ onClose }: { onClose?: () => void }) => {
  return (
    <>
      <Flex
        width="100%"
        maxWidth="360px"
        height="100vh"
        position="fixed"
        top="0"
        left="0"
        bg="white"
        direction="column"
      >
        <Flex py="45px" textAlign="center">
          <Box
            width="100%"
            maxWidth="186px"
            maxHeight="40px"
            mx="auto"
            display={["inline-block", "inline-block", "inline-block", "block"]}
          >
            <NextImage src="/dashboard/assets/images/hlogo.svg" />
          </Box>

          <Button
            display={["inline-block", "inline-block", "inline-block", "none"]}
            size="sm"
            ml="auto"
            mr={4}
            colorScheme="primary"
            variant="outline"
            onClick={() => {
              if (onClose) onClose();
            }}
            py={2}
          >
            <Box as={VscClose} />
          </Button>
        </Flex>

        <Flex direction="column" flex={1} width="100%" overflowY="auto">
          <SideNavMenu />
          <LogoutButton href="/" />
        </Flex>
      </Flex>
    </>
  );
};

type LogoutButtonProps =
  | {
      href: string;
    }
  | { onClick: () => void };

const LogoutButton = (props: LogoutButtonProps) => {
  return (
    <>
      <Box p="28px" bg="white">
        <Link href={`https://topgeek.io/signout?redirectUrl=`}>
          <Flex px="18px" py="20.5" align="center" cursor="pointer">
            <Box as={FiLogOut} mr={3} color="text.regular" />
            <Text>Logout</Text>
          </Flex>
        </Link>
      </Box>
    </>
  );
};
