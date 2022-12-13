import { Grid, Flex, Box, Button } from "@chakra-ui/react";
import { Input, TextArea } from "../composites";

const BasicProjectDetails = () => {
  return (
    <>
      <Grid gap={4} my={6}>
        <Input title="Project Name" />

        <TextArea title="Project Description" />

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
