import { Button, Grid, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { Select } from "../../../components/composites";
import ProjectLayout from "../../../components/projects/project-layout";

const Settings: NextPage = () => {
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
            name: "Settings",
            to: "/projects/22/settings",
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
          title: "Settings",
          desc: "Default settings for your project",
          actionButton: <></>,
        }}
      >
        <Grid my={4} gap={6}>
          <Select
            name="Database"
            title="Default Database"
            options={[
              {
                label: "Postgress Database",
                value: 1,
              },
            ]}
          />

          <Select
            name="storage"
            title="Default Storage"
            options={[
              {
                label: "Static Storage",
                value: 1,
              },
            ]}
          />

          <Box textAlign="right" my={4}>
            <Button
              ml="auto"
              variant="ghost"
              colorScheme="primary"
              fontWeight={400}
            >
              Cancel
            </Button>
            <Button ml={2} colorScheme="primary" fontWeight={400}>
              Update
            </Button>
          </Box>
        </Grid>
      </ProjectLayout>
    </>
  );
};

export default Settings;
