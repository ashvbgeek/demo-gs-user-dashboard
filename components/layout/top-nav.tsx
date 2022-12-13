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
import { IUser } from "../../app/models/IUser.model";
import { FaUser } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineHelp, MdSearch } from "react-icons/md";
import { IconType } from "react-icons";
import Link from "next/link";
import _ from "lodash";
import { ICompany } from "../../app/models/ICompany.model";

const TopNav = ({
  session,
  sessionLoading,
  toggleSidebar,
  company,
}: {
  session?: any;
  sessionLoading: boolean;
  company: {
    data?: ICompany | null;
    loading?: boolean;
  };
  toggleSidebar?: () => void;
}) => {
  return (
    <>
      <Flex
        width="100%"
        minHeight="120px"
        align="center"
        justify="space-between"
        bg="white"
        p="28px"
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
          {company?.data?.employee_portal_name || ""}
        </Text>
        <InputGroup
          width="100%"
          maxWidth="320px"
          minHeight="60px"
          display={["none", "none", "none", "block"]}
          mr={4}
          ml="auto"
        >
          <Input
            bg="#F1F1F1"
            minHeight="60px"
            borderRadius="4px"
            placeholder="Search here"
          />
        </InputGroup>
        {sessionLoading ? <Box /> : <UserDropDownMenu _session={session} />}
      </Flex>
    </>
  );
};

export default TopNav;

const UserDropDownMenu = ({ _session }: { _session: IUser }) => {
  const menu = [
    {
      title: "Profile",
      link: "/settings/my-account",
      icon: FaUser,
    },
    {
      title: "Settings",
      link: "/settings/company-setting",
      icon: RiSettings3Fill,
    },
    {
      title: "Help Center",
      link: "/",
      icon: MdOutlineHelp,
    },
  ];

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Flex align="center">
          <Avatar
            size="sm"
            name={_session?.name}
            src={_session?.profileImageURL ?? ""}
          />
          {/* <Text mx={2} fontSize="md">
            {_session?.name}
          </Text> */}
          <Box as={FiChevronDown} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent mr={4} maxWidth="260px">
        <PopoverBody p={4} pb={0}>
          <Flex align="center">
            <Avatar
              width="36px"
              height="36px"
              mr={4}
              name={_session?.name}
              src={_session?.profileImageURL ?? ""}
            />
            <Box>
              <Text fontSize="14px" fontWeight={600}>
                {_session?.name}
              </Text>
              <Text fontSize="12px">{_session?.job_title}</Text>
            </Box>
          </Flex>

          <Box pt="12px">
            {menu.map((_menu) => (
              <ListBlock key={_menu?.title} {..._menu} />
            ))}
          </Box>

          <Divider />

          <Link href="/signout">
            <Flex pt={3} align="center" cursor="pointer">
              <Box as={FiLogOut} color="#6A6A6A" mr="7px" />
              <Text fontSize="12px" fontWeight="500">
                Logout
              </Text>
            </Flex>
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const ListBlock = ({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon: IconType;
}) => {
  return (
    <Box my={2}>
      <Link href={link}>
        <Flex py={2} align="center" cursor="pointer">
          <Box as={icon} color="#6A6A6A" mr="7px" />
          <Text fontSize="12px" fontWeight="500">
            {title}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
