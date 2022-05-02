import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Noto Serif JP'",
    body: "'Noto Sans JP'",
  },
});
