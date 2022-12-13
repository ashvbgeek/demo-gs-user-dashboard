import {
  Box,
  Flex,
  Text,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "../primities";
import Layout2 from "../layout/layout2";
import _ from "lodash";
import menu from "../../config/menu";
import { AiOutlineEdit } from "react-icons/ai";
import { FiDatabase, FiSettings } from "react-icons/fi";
import { TiCloudStorageOutline } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { SlRocket } from "react-icons/sl";
import { BiStats } from "react-icons/bi";
import { AiOutlineContainer } from "react-icons/ai";
import Link from "next/link";

interface IProjectLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const ProjectLayout = ({ title, children }: IProjectLayoutProps) => {
  return (
    <Layout2>
      <Box width="100%" maxWidth={["1200px"]} p={4} mx="auto" borderRadius="md">
        {/* HEADER */}

        <Breadcrumb fontSize="xs">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Projects</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrentPage>
              Glue Stack
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex align="center" justify="space-between" mt={4}>
          <Box>
            <Text fontSize={["4xl"]} fontFamily="heading" fontWeight={700}>
              GlueStack Project
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quia eligendi corporis nostrum reprehenderit repudiandae, enim
              consequuntur nobis veniam sequi ipsum, placeat porro quae beatae
              sit dolor perspiciatis ratione quam.
            </Text>
          </Box>

          <Box>
            {/* <Button colorScheme="primary" fontWeight={400}>
              <Box as={AiOutlinePlus} mr={1} />
              Add Project
            </Button> */}
          </Box>
        </Flex>

        <ProjectLayoutWrapper>{children}</ProjectLayoutWrapper>
      </Box>
    </Layout2>
  );
};

export default ProjectLayout;

const ProjectLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex direction="row" width="100%" mt={6}>
        <ProjectSidebar />

        <Box ml={4} flex={1} p={4} bg="white" borderRadius="md">
          <Text fontSize={["2xl"]} fontFamily="heading" fontWeight={700}>
            Edit gluestack project
          </Text>
          <Text fontSize="sm">
            Edit basic details of the project name, description
          </Text>

          <Box mt={4}>{children}</Box>
        </Box>
      </Flex>
    </>
  );
};

const getProjectSidebarMenuItems = (_projectId: number) => {
  return [
    {
      name: "Basic details",
      to: `/projects/${_projectId}`,
      icon: AiOutlineEdit,
    },
    {
      name: "Database",
      to: `/projects/${_projectId}/database`,
      icon: FiDatabase,
    },
    {
      name: "Storage",
      to: `/projects/${_projectId}/storage`,
      icon: TiCloudStorageOutline,
    },
    {
      name: "Settings",
      to: `/projects/${_projectId}/settings`,
      icon: FiSettings,
    },
    {
      name: "Env. settings",
      to: `/projects/${_projectId}/env-setting`,
      icon: TbWorld,
    },
    {
      name: "Deployments",
      to: `/projects/${_projectId}/deployments`,
      icon: SlRocket,
    },
    {
      name: "Stats",
      to: `/projects/${_projectId}/stats`,
      icon: BiStats,
    },
    {
      name: "Containers",
      to: `/projects/${_projectId}/containers`,
      icon: AiOutlineContainer,
    },
  ];
};
const ProjectSidebar = () => {
  return (
    <>
      <Box>
        <Box
          overflow="hidden"
          width="100%"
          maxWidth="160px"
          minWidth="160px"
          bg="white"
          // p={4}
          px={2}
          borderRadius="md"
        >
          {_.map(getProjectSidebarMenuItems(22), (menuItem, index) => (
            <ProjectSidebarMenuItem
              {...menuItem}
              isLastItem={
                getProjectSidebarMenuItems(22).length === index + 1
                  ? true
                  : false
              }
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

const ProjectSidebarMenuItem = (props: {
  name: string;
  to: string;
  icon: any;
  isLastItem?: boolean;
}) => {
  return (
    <>
      <Link href={props?.to}>
        <Flex
          px={3}
          py={3}
          align="center"
          borderBottom={props?.isLastItem ? "" : "1px solid #E7E7E7"}
        >
          <Box color="black" mr={2} as={props?.icon} />

          <Text color="black" fontSize="xs" flex={1}>
            {props?.name}
          </Text>
        </Flex>
      </Link>
    </>
  );
};
