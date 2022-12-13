import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import _ from "lodash";
import menu from "../../../config/menu";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNavMenu = () => {
  //@ts-ignore

  const router = useRouter();
  const activeRoute = router?.asPath ?? "";
  const [expandedRouteName, setExpandedRouteName] = useState("");

  const onExpandRoute = (route: string) => {
    setExpandedRouteName(route);
  };

  return (
    <>
      <Box width="100%" flex={1} p={4}>
        {_.map(menu, (m) => {
          return (
            <MenuItem
              key={m?.name}
              {...m}
              activeRoute={activeRoute}
              expandedRouteName={expandedRouteName}
              onExpandRoute={onExpandRoute}
            />
          );
        })}
      </Box>
    </>
  );
};

export default SideNavMenu;

interface MenuItem {
  name: string;
  icon: any;
  filledIcon: any;
  to?: string;
  permissions?: string[];
  activeRoute?: string;
  expandedRouteName?: string;
  onExpandRoute?: (route: string) => void;
  isComingSoon?: boolean;
  sub?: Array<{
    name: string;
    to?: string;
    permissions?: string[];
    isComingSoon?: boolean;
  }>;
}

const MenuItem = ({
  name,
  icon,
  to,
  permissions,
  sub,
  activeRoute,
  expandedRouteName,
  onExpandRoute,
  filledIcon,
  isComingSoon,
}: MenuItem) => {
  const isExpanded = () => {
    if (name === expandedRouteName) {
      return true;
    }

    return isChildActive();

    return false;
  };

  const isChildActive = () => {
    // check if child is active
    const activeChild = _.find(
      sub?.length ? sub : [],
      (child) => child.to === activeRoute
    );

    if (activeChild) return true;

    return false;
  };

  const isRouteActive = () => {
    if (!sub || !sub.length) {
      return activeRoute === to ? true : false;
    }

    return false;
  };

  if (!sub || !sub.length)
    return (
      <>
        <Link href={isComingSoon ? "" : to ? to : "/"}>
          <Flex
            px={4}
            py={3}
            borderRadius="6px"
            align="center"
            cursor="pointer"
            fontWeight={isRouteActive() ? 600 : 400}
            color={isRouteActive() ? "primary.500" : "text.regular"}
            _hover={{ background: "primary.100" }}
            mb={2}
          >
            <Box
              fontSize="20px"
              as={isRouteActive() ? filledIcon : icon}
              mr={3}
              color={isRouteActive() ? "primary.500" : "text.regular"}
            />
            <Text
              flex={1}
              color={isRouteActive() ? "primary.500" : "text.regular"}
              fontSize={"sm"}
            >
              {name}
            </Text>
            {isComingSoon && (
              <Box
                fontSize={"xs"}
                color="#254A72"
                bg="#E8F3FF"
                py={1}
                px={2.5}
                borderRadius="4px"
                fontWeight={600}
              >
                Coming Soon{" "}
              </Box>
            )}
          </Flex>
        </Link>
      </>
    );

  return (
    <>
      <Flex
        px={4}
        py={3}
        align="center"
        cursor="pointer"
        pt="0"
        onClick={() => {
          if (onExpandRoute && sub && sub.length) {
            if (isExpanded()) {
              onExpandRoute("");
              return;
            }

            onExpandRoute(name ? name : "/");
          }
        }}
        fontWeight={isChildActive() ? 600 : 400}
        color={isChildActive() ? "primary.500" : "text.regular"}
      >
        <Box fontSize="20px" as={isChildActive() ? filledIcon : icon} mr={3} />
        <Text
          fontSize="sm"
          flex={1}
          color={isChildActive() ? "primary.500" : "text.regular"}
        >
          {name}
        </Text>
        {sub && sub.length && (
          <Box as={isExpanded() ? FiChevronUp : FiChevronDown} />
        )}
      </Flex>

      {isExpanded() && (
        <>
          <Box borderLeftWidth="4px" borderLeftColor="#E7E7E7" ml="24px">
            {_.map(sub, (subItem) => {
              return (
                <>
                  <Link href={subItem?.to ? subItem?.to : ""}>
                    <Box
                      p="12px"
                      ml="14px"
                      cursor="pointer"
                      _hover={{ background: "primary.100" }}
                      borderRadius="6px"
                    >
                      <Text
                        fontSize="sm"
                        fontWeight={subItem?.to === activeRoute ? 600 : 400}
                        color={
                          subItem?.to === activeRoute
                            ? "primary.500"
                            : "text.regular"
                        }
                      >
                        {subItem?.name}
                      </Text>
                    </Box>
                  </Link>
                </>
              );
            })}
          </Box>
        </>
      )}
    </>
  );
};
