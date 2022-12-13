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
import { useRouter } from "next/router";

interface IProjectLayoutProps {
  pageSeoTitle?: string;
  children: React.ReactNode;
  breadcrumbs: Array<{ to: string; name: string; isCurrentPage?: boolean }>;
  project?: {
    name?: string;
    desc?: string;
  };
  page?: {
    title?: string;
    desc?: string;
  };
}

const ProjectLayout = ({
  pageSeoTitle,
  children,
  breadcrumbs,
  project,
  page,
}: IProjectLayoutProps) => {
  return (
    <Layout2 title={pageSeoTitle}>
      <Box width="100%" maxWidth={["1200px"]} p={4} mx="auto" borderRadius="md">
        {/* HEADER */}

        <Breadcrumb fontSize="xs">
          {_.map(breadcrumbs, (breadCrumbItem) => (
            <BreadcrumbItem>
              <Link href={breadCrumbItem?.to}>
                <Text fontSize="xs">{breadCrumbItem?.name}</Text>
              </Link>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        <Flex align="center" justify="space-between" mt={4}>
          <Box>
            <Text fontSize={["4xl"]} fontFamily="heading" fontWeight={700}>
              {project?.name}
            </Text>
            <Text fontSize="sm">{project?.desc}</Text>
          </Box>

          <Box></Box>
        </Flex>

        <ProjectLayoutWrapper title={page?.title} desc={page?.desc}>
          {children}
        </ProjectLayoutWrapper>
      </Box>
    </Layout2>
  );
};

export default ProjectLayout;

const ProjectLayoutWrapper = ({
  children,
  title,
  desc,
}: {
  children: React.ReactNode;
  title?: string;
  desc?: string;
}) => {
  return (
    <>
      <Flex direction="row" width="100%" mt={6}>
        <ProjectSidebar />

        <Box ml={4} flex={1} p={4} bg="white" borderRadius="md">
          <Text fontSize={["2xl"]} fontFamily="heading" fontWeight={700}>
            {title}
          </Text>
          <Text fontSize="sm">{desc}</Text>

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
      to: `/projects/${_projectId}/manage-databases`,
      icon: FiDatabase,
    },
    {
      name: "Storage",
      to: `/projects/${_projectId}/manage-storages`,
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
  const router = useRouter();
  const isRouteActive = (_route: string, _currentRoute?: string) => {
    return _currentRoute?.includes(_route.split("/").reverse()[0])
      ? true
      : false;
  };

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
              isActive={isRouteActive(menuItem?.to, router?.pathname)}
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
  isActive?: boolean;
}) => {
  return (
    <>
      <Link href={props?.to}>
        <Flex
          px={3}
          py={3}
          align="center"
          // borderBottom={props?.isLastItem ? "" : "1px solid #E7E7E7"}
          bg={props?.isActive ? "primary.100" : "transparent"}
          borderRadius={props?.isActive ? "md" : "0"}
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
