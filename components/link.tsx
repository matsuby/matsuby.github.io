import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Box,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type Props = NextLinkProps & ChakraLinkProps;

export const Link = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  locale,
  children,
  ...chakraLinkProps
}: Props) => {
  const nextLinkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
  };

  if (chakraLinkProps.isExternal) {
    return (
      <Box _hover={{ opacity: 0.8 }}>
        <ChakraLink href={href} _hover={{}} {...chakraLinkProps}>
          {children}
        </ChakraLink>
      </Box>
    );
  }

  return (
    <NextLink {...nextLinkProps}>
      <Box _hover={{ opacity: 0.8 }}>
        <ChakraLink _hover={{}} {...chakraLinkProps}>
          {children}
        </ChakraLink>
      </Box>
    </NextLink>
  );
};
