import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaMoon, FaSun, FaTwitter } from "react-icons/fa";
import { Link } from "@/components/link";

type Props = {
  title: String;
  children?: React.ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{`${title} | Unkonow`}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
      </Head>

      <Box>
        <Box
          as="header"
          px={{ base: "20px", lg: "160px" }}
          h="56px"
          py="8px"
          shadow="base"
        >
          <HStack>
            <Link href="/">
              <Heading as="span" size="lg" py="1px" lineHeight="base">
                Unkonow
              </Heading>
            </Link>

            <Spacer />

            <Button
              m={0}
              p={0}
              pt="2px"
              bg="transparent"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <Icon as={FaSun} w="1.4em" h="1.4em" />
              ) : (
                <Icon as={FaMoon} w="1.2em" h="1.2em" />
              )}
            </Button>

            <Button m={0} p={0} bg="transparent">
              <Link href="https://twitter.com/matsubyzzz" isExternal>
                <Icon as={FaTwitter} w="1.4em" h="1.4em" mt="6px" />
              </Link>
            </Button>

            <Button m={0} p={0} bg="transparent">
              <Link
                href="https://github.com/matsuby/matsuby.github.io"
                isExternal
              >
                <Icon as={FaGithub} w="1.4em" h="1.4em" mt="6px" />
              </Link>
            </Button>
          </HStack>
        </Box>

        <Box as="main" minH="90vh" px={{ base: "20px", lg: "160px" }} py="20px">
          <Heading as="h1" size="xl">
            {title}
          </Heading>
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
};
