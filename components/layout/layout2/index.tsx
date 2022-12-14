import { Box, Flex, Text, Button, Image, Avatar } from "@chakra-ui/react";
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import _ from "lodash";
import { SlDocs } from "react-icons/sl";
import { GiToken } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import Link from "next/link";

interface ILayout2Props {
  title?: string;
  children: React.ReactNode;
}

const Layout2 = ({ title, children }: ILayout2Props) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Box
          marginTop="86px"
          width="100%"
          maxWidth="100vw"
          overflowX="hidden"
          bg="#f3f4f4"
        >
          {children}
        </Box>
      </main>

      <footer></footer>
    </>
  );
};

export default Layout2;

const menuItems = [
  {
    name: "Home",
    to: "/",
    icon: MdOutlineDashboard,
    filledIcon: MdDashboard,
    permissions: [],
  },
  {
    name: "Projects",
    to: "/projects",
    icon: AiOutlineProject,
    filledIcon: MdDashboard,
    permissions: [],
  },
  {
    name: "Tokens",
    to: "/tokens",
    icon: GiToken,
    filledIcon: MdDashboard,
    permissions: [],
  },

  {
    name: "Docs",
    to: "https://docs.nativebase.io/",
    icon: SlDocs,
    filledIcon: MdDashboard,
    permissions: [],
  },
];

const Header = () => {
  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100%"
        border="1px solid #E7E7E7"
        bg="white"
      >
        <Flex
          width="100%"
          maxWidth="1200px"
          mx="auto"
          align="center"
          justify="space-between"
          p={4}
        >
          <Logo />

          <Flex>
            {_.map(menuItems, (menuItem) => (
              <Link href={menuItem?.to}>
                <Button
                  fontWeight={400}
                  colorScheme="primary"
                  variant="ghost"
                  fontSize="sm"
                >
                  <Box as={menuItem?.icon} mr={1} />
                  {menuItem?.name}
                </Button>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <Flex>
        <Image
          src="https://www.geekyants.com/favicon.ico"
          height="30px"
          mr={2}
        />

        <Text fontWeight="700" fontSize="lg">
          gluestack
        </Text>
      </Flex>
    </>
  );
};
