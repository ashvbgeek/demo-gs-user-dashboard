import theme from "../theme";
import "../styles/globals.scss";
import * as nextImage from "next/image";

export const parameters = {
  chakra: {
    theme: theme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// NEXT IMAGE CONFIG
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});
