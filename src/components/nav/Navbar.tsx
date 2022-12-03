import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import useRenderCompleted from "../../hooks/useRenderCompleted";

import ColorModeSwitcher from "../ColorModeSwitcher";

interface NavbarProps {}

function Navbar() {
  const isMounted = useRenderCompleted();

  return (
    <>
      {" "}
      {isMounted && (
        <Box
          zIndex={10}
          position="fixed"
          w="100%"
          bg={useColorModeValue("white", "gray.800")}
          borderBottom={1}
          borderStyle="solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          py={{ base: 2 }}
          px={{ base: 4 }}
        >
          <Flex
            maxW={960}
            color={useColorModeValue("gray.600", "white")}
            minH="60px"
            align="center"
            m="auto"
          >
            <Flex flex={{ base: 1, md: "auto" }}>
              <NextLink href="/" passHref>
                <a>
                  <Link
                    fontFamily="heading"
                    fontWeight="bold"
                    color={useColorModeValue("gray.800", "white")}
                  >
                    GhibliBestCut
                  </Link>
                </a>
              </NextLink>
            </Flex>

            <Stack justify="flex-end" direction="row" spacing={6}>
              <ColorModeSwitcher />
              <Button fontSize="sm" fontWeight={400}>
                <NextLink href="/login" passHref>
                  <a>로그인</a>
                </NextLink>
              </Button>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize="sm"
                fontWeight={600}
                colorScheme="teal"
              >
                <NextLink href="/signup" passHref>
                  <a>시작하기</a>
                </NextLink>
              </Button>
            </Stack>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Navbar;
