import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    pfoo: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "26px",
    "4xl": "30px",
    "5xl": "42px",
    "6xl": "52px",
    hxs: "16px",
    hsm: "20px",
    hlg: "24px",
    hxl: "28px",
    h2xl: "32px",
    h3xl: "36px",
    h4xl: "40px",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, sans-serif",
  },
  colors: {
    primary: {
      50: "#F9FCFF",
      100: "#E8F3FF",
      200: "#43509627",
      400: "#505EA5",
      500: "#254A72",
      900: "#446ba4",
    },
    page: {
      bg: "#f1f1f1",
    },
    text: {
      regular: "#131313",
    },
  },
  spacing: {
    padding: {
      xl: "28px",
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "text.regular",
        fontSize: "lg",
        fontFamily: "body",
      },
      defaultProps: {},
    },
    Button: {
      baseStyle: {
        fontWeight: 700,
        fontFamily: "body",
        paddingY: "16px",
      },
      variants: {
        primary: {
          background: "linear-gradient(180deg, #254A72 0%, #10243E 100%)",
          color: "white",
          border: "1px solid #254A72",
          _hover: {
            background: "transparent",
            color: "#254A72",
          },
        },
        secondary: {
          background: "#E7E7E7",
          color: "#131313",
          border: "1px solid #E7E7E7",
          _hover: {
            background: "transparent",
            borderColor: "transparent",
          },
        },
      },
    },
  },
});

export default theme;
