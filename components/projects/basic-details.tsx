import { Grid, Flex, Box, Button } from "@chakra-ui/react";
import { Input, TextArea } from "../composites";

const BasicProjectDetails = () => {
  return (
    <>
      <Grid gap={4} my={6}>
        <Input title="Project Name" value="gluestack project" />

        <TextArea
          title="Project Description"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia eligendi corporis nostrum reprehenderit repudiandae, enim consequuntur nobis veniam sequi ipsum, placeat porro quae beatae sit dolor perspiciatis ratione quam."
        />

        <Flex justify="space-between">
          <Box></Box>
          <Flex>
            <Button
              mr={3}
              colorScheme="primary"
              variant="ghost"
              fontWeight={400}
              fontSize="sm"
              px={4}
            >
              Cancel
            </Button>
            <Button variant="primary" fontWeight={400} fontSize="sm" px={4}>
              Update Details
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
};

export default BasicProjectDetails;
