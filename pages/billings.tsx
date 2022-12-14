import Link from "next/link";
import EmptyScreen from "../components/composites/empty-screen";
import Layout2 from "../components/layout/layout2";
import { Box, Button, Flex, Text } from "../components/primities";

const Tokens = () => {
  return (
    <>
      <Layout2>
        <Box
          width="100%"
          maxWidth={["1200px"]}
          p={4}
          mx="auto"
          borderRadius="md"
        >
          {/* HEADER */}
          <Flex align="center" justify="space-between">
            <Box>
              <Text fontSize={["4xl"]} fontFamily="heading" fontWeight={700}>
                Billings
              </Text>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Box>

            <Box></Box>
          </Flex>
          {/* GRID */}
          <EmptyScreen
            imageURL={`/reports.png`}
            title="Coming Soon"
            desc="Exercitation veniam consequat sunt nostrud amet. Veniam consequat sunt nostrud consequat sunt nostrud amet."
            flexProps={{
              bg: "white",
              minHeight: "600px",
              my: 4,
            }}
            imageBoxProps={{
              maxWidth: "400px",
            }}
            actionButton={
              <>
                <Link href="/">
                  <Button variant="primary" fontWeight={400}>
                    Back to home
                  </Button>
                </Link>
              </>
            }
          />
        </Box>
      </Layout2>
    </>
  );
};

export default Tokens;
