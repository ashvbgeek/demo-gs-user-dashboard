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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { Input, TextArea } from "../composites";
import { Paginator } from "../composites/paginator";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import ModalComponent from "../composites/modal";

const HomePage = () => {
  const modalDisclosure = useDisclosure();

  return (
    <>
      <Box width="100%" maxWidth={["1200px"]} p={4} mx="auto" borderRadius="md">
        {/* HEADER */}

        <Breadcrumb fontSize="xs">
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
            <Text fontSize="sm">
              View status and manage your projects easily
            </Text>
          </Box>

          <Box>
            <Button
              colorScheme="primary"
              fontWeight={400}
              onClick={modalDisclosure.onOpen}
            >
              <Box as={AiOutlinePlus} mr={1} />
              Add Project
            </Button>
          </Box>
        </Flex>

        {/* GRID */}
        <ProjectsDataGrid />
      </Box>

      <ModalComponent header="Add Project" {...modalDisclosure}>
        <Box>
          <Grid gap={4}>
            <Input title="Project Name" />

            <TextArea title="Project Desc"></TextArea>
          </Grid>

          <Box textAlign="right" my={4}>
            <Button
              ml="auto"
              variant="ghost"
              colorScheme="primary"
              fontWeight={400}
              onClick={modalDisclosure.onClose}
            >
              Cancel
            </Button>
            <Button
              ml={2}
              colorScheme="primary"
              fontWeight={400}
              onClick={modalDisclosure.onClose}
            >
              Create
            </Button>
          </Box>
        </Box>
      </ModalComponent>
    </>
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

// no of reqs
// bandwidth
// Project upload sizes
// created at => last deployed at

const ProjectDataBlock = () => {
  return (
    <Link href="/projects/23/edit">
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
            Last Deployed : 24 mins ago
          </Text>
        </Box>

        <Box>
          <Grid templateColumns={"repeat(1, 1fr)"} gap={2}>
            <Flex align="center">
              <Box
                display="inline"
                fontSize="xs"
                px={2}
                py={1}
                bg="green.100"
                color="green.500"
                textTransform="uppercase"
                borderRadius="6px"
                fontWeight={500}
              >
                Deployed
              </Box>
            </Flex>
            <Flex align="center">
              <Box>
                <Text fontSize="xs">https://geekyants.com/</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>

        <Box mx={4}>
          <Grid templateColumns={"repeat(4, 1fr)"} gap={2}>
            <Text fontSize="sm" fontWeight={300}>
              Bandwidth :
            </Text>

            <Text fontSize="sm" fontWeight={500}>
              1GB / 4 GB
            </Text>

            <Text fontSize="sm" fontWeight={300}>
              Disk Space :
            </Text>

            <Text fontSize="sm" fontWeight={500}>
              1GB / 4 GB
            </Text>

            <Text fontSize="sm" fontWeight={300}>
              No of reqs :
            </Text>

            <Text fontSize="sm" fontWeight={500}>
              400
            </Text>

            <Text fontSize="sm" fontWeight={300}>
              Upload size :
            </Text>

            <Text fontSize="sm" fontWeight={500}>
              200 mb (latest)
            </Text>
          </Grid>
        </Box>

        <Box>
          <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
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
    </Link>
  );
};
