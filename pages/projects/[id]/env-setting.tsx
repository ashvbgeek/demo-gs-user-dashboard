import {
  Button,
  Grid,
  Box,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Select, Input } from "../../../components/composites";
import ProjectLayout from "../../../components/projects/project-layout";
import { BsTrash } from "react-icons/bs";
import ModalComponent from "../../../components/composites/modal";

const EnvSettings: NextPage = () => {
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
            name: "Environment Setting",
            to: "/projects/22/env-setting",
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
          title: "Environment Setting",
          desc: "Environment Setting settings for your project",
          actionButton: (
            <>
              <Button
                variant="primary"
                fontWeight={400}
                onClick={modalDisclosure.onOpen}
              >
                Add Env. Variable
              </Button>
            </>
          ),
        }}
      >
        <Grid my={4} gap={4}>
          <EnvSettingsRow />
          <EnvSettingsRow />
          <EnvSettingsRow />
          <EnvSettingsRow />
        </Grid>
      </ProjectLayout>

      <ModalComponent header="Add Environment Variable" {...modalDisclosure}>
        <Box>
          <Grid gap={4} mt={2}>
            <Input title="Key" />

            <Input title="Value" />
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

export default EnvSettings;

const EnvSettingsRow = () => {
  return (
    <>
      <Flex direction="row" align="center">
        <Box flex={1}>
          <Input flex={1} title="Key" value="DATABASE_URL" />
        </Box>
        <Box flex={1} px={4}>
          <Input flex={1} title="Value" mr={2} value="google.com" />
        </Box>

        <Box>
          <IconButton
            mt={2}
            icon={<BsTrash />}
            aria-label="test"
            borderRadius="50%"
            size="xs"
            colorScheme="red"
            bg="red.100"
            color="red.500"
          />
        </Box>
      </Flex>
    </>
  );
};
