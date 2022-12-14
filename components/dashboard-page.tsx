import Layout2 from "./layout/layout2";
import { Container, Flex, Text, Box, Button, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { FaUserCircle, FaBriefcase } from "react-icons/fa";
import { MdGroupAdd, MdOutlineLaptopMac, MdCheck } from "react-icons/md";
import map from "lodash/map";

const DashboardPage = () => {
  return (
    <>
      <Layout2>
        <Box
          width="100%"
          maxWidth={["1200px"]}
          p={4}
          mx="auto"
          borderRadius="md"
        >
          {/* HEADER */}
          <Flex align="center" justify="space-between">
            <Box>
              <Text fontSize={["4xl"]} fontFamily="heading" fontWeight={700}>
                Hey !
              </Text>
              <Text fontSize="sm">
                Welcome,Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Box>

            <Box></Box>
          </Flex>
          {/* GRID */}
          <DashboardActionGrid />
        </Box>
      </Layout2>
    </>
  );
};

export default DashboardPage;

const DashboardActionGrid = () => {
  return (
    <>
      <Grid
        templateColumns={[
          "repeat(1, 4fr)",
          "repeat(2, 3fr)",
          "repeat(2, 3fr)",
          "repeat(2, 2fr)",
          "repeat(3, 2fr)",
        ]}
        gap={6}
        mt={8}
        flexWrap="wrap"
      >
        {map(DashboardActions, (action) => (
          <GridActionBlock key={action.title} {...action} />
        ))}
      </Grid>
    </>
  );
};

interface IDashboardGridBlock {
  icon: any;
  title: string;
  desc: string;
  button: {
    text?: string;
    link?: string;
    isCheck?: boolean;
  };
}


import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import _ from "lodash";
import { SlDocs } from "react-icons/sl";
import { GiToken } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";

const DashboardActions: Array<IDashboardGridBlock> = [
  {
    icon: AiOutlineProject,
    title: "Manage Projects",
    desc: "Manage all of your projects from one place",
    button: {
      text: "Manage Projects",
      link: "/projects",
    },
  },
  {
    icon: GiToken,
    title: "Manage Tokens",
    desc: "Manage all of your tokens from one place",
    button: {
      text: "Manage Tokens",
      link: "/tokens",
    },
  },
  {
    icon: RiBillLine,
    title: "Billings",
    desc: "Lorem ipsum dolor sit amet consectetur elit.",
    button: {
      text: "Billing",
      link: "/billings",
    },
  },
  {
    icon: SlDocs,
    title: "Documentations",
    desc: "Need some help, lost a little, docs to the rescue",
    button: {
      text: "View Docs",
      link: "",
      isCheck: true,
    },
  },
];

const GridActionBlock = ({
  title,
  icon,
  desc,
  button,
}: IDashboardGridBlock) => {
  return (
    <>
      <Box>
        <Box
          p="28px"
          bg="white"
          border="1px solid"
          borderColor="#E7E7E7"
          borderRadius="6px"
          minWidth="325px"
          width="100%"
        >
          <Box
            height="36px"
            width="36px"
            minHeight="36px"
            minWidth="36px"
            fontSize="36px"
            as={icon}
            color="primary.500"
          />
          <Text
            mt={4}
            mb={1}
            fontSize="20px"
            fontFamily="heading"
            color="primary.500"
            fontWeight={700}
          >
            {title}
          </Text>
          <Text fontSize="14px" mb="24px">
            {desc}
          </Text>

          <Link href={button?.link ? button?.link : ""}>
            <Button
              variant="outline"
              colorScheme="primary"
              cursor="pointer"
              color="primary.500"
              borderColor="primary.500"
            >
              <Box
                color="primary.500"
                as={button?.isCheck ? MdCheck : MdCheck}
                mr={2}
              />
              {button?.text}
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
