import {
  Flex,
  InputGroup,
  Input,
  Box,
  Avatar,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Divider,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineHelp, MdSearch } from "react-icons/md";
import { IconType } from "react-icons";
import Link from "next/link";
import _ from "lodash";

const TopNav = ({ toggleSidebar }: { toggleSidebar?: () => void }) => {
  return (
    <>
      <Flex
        width="100%"
        align="center"
        justify="space-between"
        bg="white"
        p={4}
        borderBottom="1px solid #E7E7E7"
      >
        <Button
          variant="outline"
          colorScheme="primary"
          display={["block", "block", "block", "none"]}
          onClick={() => {
            if (toggleSidebar) {
              toggleSidebar();
            }
          }}
          py={2}
        >
          <Box as={FiMenu} />
        </Button>
        <Text
          fontFamily="heading"
          fontWeight="700"
          fontSize={["hsm", "hsm", "hlg", "hxl"]}
        >
          Mr Jhon Doe
        </Text>
      </Flex>
    </>
  );
};

export default TopNav;

