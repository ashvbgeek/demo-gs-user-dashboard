import {
  Container,
  Flex,
  Text,
  Box,
  Button,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { Input } from "../composites";
import { Paginator } from "../composites/paginator";

const HomePage = () => {
  return (
    <Box width="100%" maxWidth={["1200px"]} p={4} mx="auto" borderRadius="md">
      {/* HEADER */}

      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Projects</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex align="center" justify="space-between" mt={4}>
        <Box>
          <Text fontSize={["4xl"]} fontFamily="heading" fontWeight={700}>
            Projects
          </Text>
          <Text fontSize="sm">View status and manage your projects easily</Text>
        </Box>

        <Box>
          <Button colorScheme="primary" fontWeight={400}>
            <Box as={AiOutlinePlus} mr={1} />
            Add Project
          </Button>
        </Box>
      </Flex>

      {/* GRID */}
      <ProjectsDataGrid />
    </Box>
  );
};

export default HomePage;

const ProjectsDataGrid = () => {
  return (
    <>
      <Box>
        <Flex justify="space-between" mt={4}>
          <Box />
          <Box>
            <Input
              ml="auto"
              maxWidth="300px"
              bg="white"
              placeholder="Search ...."
            />
          </Box>
        </Flex>
      </Box>
      <Grid gap={4} mt={4}>
        <ProjectDataBlock />
        <ProjectDataBlock />
        <ProjectDataBlock />
        <ProjectDataBlock />
        <ProjectDataBlock />
      </Grid>

      <Box>
        <Flex justify="space-between" mt={4}>
          <Box />
          <Box>
            <Paginator
              total={10}
              perPage={25}
              currentPage={1}
              setCurrentPage={() => {}}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const ProjectDataBlock = () => {
  return (
    <Flex
      p={4}
      borderRadius="md"
      border="1px solid #E7E7E7"
      bg="white"
      align="center"
      justify="space-between"
    >
      <Box>
        <Text fontSize="md" fontWeight={600} mb={1}>
          GlueStack
        </Text>
        <Text fontSize="xs" fontWeight={300}>
          Created At: 27th Oct,2022
        </Text>
      </Box>

      <Box>
        <table>
          <tr>
            <td>
              <Text fontSize="xs" fontWeight={300}>
                Status :
              </Text>
            </td>
            <td>
              <Box
                display="inline"
                fontSize="xs"
                px={2}
                py={1}
                bg="green.100"
                color="green.500"
                textTransform="uppercase"
                borderRadius="sm"
              >
                Deployed
              </Box>
              {/* <Badge
                // variant="outline"
                colorScheme="green"
                // textTransform="unset"
              >
                Deployed
              </Badge> */}
            </td>
          </tr>
          <tr>
            <td>
              <Text fontSize="xs" fontWeight={300}>
                URL :
              </Text>
            </td>
            <td>
              <Text fontSize="xs">https://geekyants.com/</Text>
            </td>
          </tr>
        </table>
      </Box>

      <Box mx={4}>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={2}>
          <Button
            colorScheme="primary"
            size="xs"
            py={1}
            px={2}
            fontWeight={400}
          >
            Manage Database
          </Button>
          <Button
            colorScheme="primary"
            size="xs"
            py={1}
            px={2}
            fontWeight={400}
          >
            Manage Storage
          </Button>
          <Button
            colorScheme="primary"
            size="xs"
            py={1}
            px={2}
            fontWeight={400}
          >
            Manage Settings
          </Button>
          <Button
            colorScheme="primary"
            size="xs"
            py={1}
            px={2}
            fontWeight={400}
          >
            Deployments
          </Button>
        </Grid>
      </Box>

      <Box>
        <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
          <IconButton
            icon={<GrView />}
            aria-label="test"
            borderRadius="50%"
            size="xs"
          />

          <IconButton
            icon={<AiOutlineEdit />}
            aria-label="test"
            borderRadius="50%"
            size="xs"
          />

          <IconButton
            icon={<BsTrash />}
            aria-label="test"
            borderRadius="50%"
            size="xs"
            colorScheme="red"
            bg="red.100"
            color="red.500"
          />
        </Grid>
      </Box>
    </Flex>
  );
};
