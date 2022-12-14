import ProjectLayout from "./project-layout";
import {
  Box,
  Button,
  Flex,
  Grid,
  useDisclosure,
  Text,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
} from "../primities";
import { TextArea, Input } from "../composites";
import ModalComponent from "../composites/modal";
import { Paginator } from "../composites/paginator";
import Link from "next/link";
import { AiFillCaretDown, AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { GrView } from "react-icons/gr";

const ManageDatabases = () => {
  const modalDisclosure = useDisclosure();

  return (
    <>
      <ProjectLayout
        breadcrumbs={[
          {
            name: "Home",
            to: "/",
          },
          {
            name: "Projects",
            to: "/projects",
          },
          {
            name: "gluestack",
            to: "/projects/22",
          },
          {
            name: "Manage Database",
            to: "/projects/22/manage-databases",
          },
        ]}
        project={{
          name: "gluestack project",
          desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quia eligendi corporis nostrum reprehenderit repudiandae, enim
              consequuntur nobis veniam sequi ipsum, placeat porro quae beatae
              sit dolor perspiciatis ratione quam.`,
        }}
        page={{
          title: "Manage Databases",
          desc: "Create, update, delete database for the project",
          actionButton: (
            <>
              <Button
                variant="primary"
                fontWeight={400}
                onClick={modalDisclosure.onOpen}
              >
                Add Database
              </Button>
            </>
          ),
        }}
      >
        <DataBaseGrid />
      </ProjectLayout>

      <ModalComponent header="Add Database" {...modalDisclosure}>
        <Box>
          <Grid gap={4} mt={2}>
            <Input title="Database Name" />

            <Input title="Database URL" />
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

export default ManageDatabases;

const DataBaseGrid = () => {
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
          Postgress Database
        </Text>
        <Text fontSize="xs" fontWeight={300}>
          Size 3.4G/8GB
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
              Active
            </Box>
          </Flex>
        </Grid>
      </Box>

      <Box mx={4}>
        <Button size="sm" fontWeight={400}>
          Test Connection
        </Button>
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
