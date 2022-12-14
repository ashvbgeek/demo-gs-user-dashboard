import { Box, Flex, Text } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Paginator = ({
  total,
  perPage,
  currentPage,
  setCurrentPage,
}: {
  total: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  if (!total) return <></>;

  const totalPages = Math.ceil(total / perPage);

  const renderPages = () => {
    let pagesArray = Array.from(Array(totalPages).keys());

    if (pagesArray.length > 3) {
      // IF FIRST PAGE
      if (currentPage === 1) {
        pagesArray = [...pagesArray.slice(0, 3)];
        // IF LAST PAGE
      } else if (currentPage === totalPages) {
        pagesArray = [...pagesArray.slice(totalPages - 3, totalPages)];
      } else {
        pagesArray = [...pagesArray.slice(currentPage - 2, currentPage + 1)];
      }
    }

    return (
      <>
        {pagesArray.map((p) => (
          <PageButton
            key={p}
            currentPageNumber={currentPage}
            pageNo={p + 1}
            setPageNumber={setCurrentPage}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <Box textAlign="right">
        <Flex ml="auto" display="inline-flex">
          <Flex
            align="center"
            mr={3}
            opacity={currentPage === 1 ? 0.4 : 1}
            cursor={currentPage === 1 ? "not-allowed" : "pointer"}
            onClick={() => {
              if (currentPage === 1) return;

              setCurrentPage(currentPage - 1);
            }}
          >
            <Box as={FiChevronLeft} />
            <Text fontSize="14px" fontWeight="500">
              Prev
            </Text>
          </Flex>

          {renderPages()}

          <Flex
            align="center"
            px="12px"
            opacity={currentPage === 1 ? 0.4 : 1}
            cursor={currentPage === totalPages ? "not-allowed" : "pointer"}
            onClick={() => {
              if (currentPage === totalPages) return;

              setCurrentPage(currentPage + 1);
            }}
          >
            <Text fontSize="14px" fontWeight="500">
              Next
            </Text>
            <Box as={FiChevronRight} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const PageButton = ({
  currentPageNumber,
  pageNo,
  setPageNumber,
}: {
  currentPageNumber: number;
  pageNo: number;
  setPageNumber?: (p: number) => void;
}) => {
  const isActive = currentPageNumber === pageNo ? true : false;

  return (
    <Box
      py={1}
      px={2}
      bg={isActive ? "primary.500" : "white"}
      color={isActive ? "white" : "text.regular"}
      borderRadius="6px"
      textAlign="center"
      mx={1}
      cursor="pointer"
      onClick={() => {
        if (setPageNumber) {
          setPageNumber(pageNo);
        }
      }}
    >
      {pageNo}
    </Box>
  );
};
