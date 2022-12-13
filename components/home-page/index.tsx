import { Container, Flex, Text, Box, Button, Grid } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const HomePage = () => {
  return (
    <Box width="100%" maxWidth={["1200px"]} p={4} mx="auto" borderRadius="md">
      {/* HEADER */}
      <Flex align="center" justify="space-between">
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
      <Grid gap={4} mt={4}>
        <ProjectDataBlock />
      </Grid>
    </>
  );
};

const ProjectDataBlock = () => {
  return (
    <Flex
      p={4}
      borderRadius="md"
      border="1px solid #E7E7E7"
      height="80px"
      bg="white"
      align="center"
      justify="space-between"
    >
      <Box>
        <Text fontSize="md">GlueStack</Text>
        <Text fontSize="xs"> </Text>
      </Box>

      <Box>
        <Flex>
          <Flex></Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
