import { Flex, Box, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import SideNav from "./side-nav";
import TopNav from "./top-nav";

export default function Layout(props: {
  title?: string;
  children: React.ReactNode;
}) {
  //@ts-ignore

  const sideNavDrawerState = useDisclosure({ defaultIsOpen: false });

  return (
    <>
      <Head>
        <title>{props?.title ? props?.title : "GlueStack"}</title>
      </Head>
      <Box
        bg="page.bg"
        minHeight="100vh"
        paddingLeft={[0, 0, 0, "260px"]}
        borderLeft="1px solid #E7E7E7"
      >
        <SideNav {...sideNavDrawerState} />
        {/* <TopNav
            session={session}
            sessionLoading={loading}
            toggleSidebar={() => {
              sideNavDrawerState?.onToggle();
            }}
            company={{ data: company, loading: companyLoading }}
          /> */}
        <Box
          width="100%"
          height="100%"
          minHeight="calc(100vh - 120px)"
          p="28px"
        >
          {props?.children}
        </Box>
      </Box>
    </>
  );
}
