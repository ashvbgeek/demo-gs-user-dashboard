import Image from "next/image";
import styles from "./index.module.scss";
import { Box, BoxProps } from "@chakra-ui/react";

interface ICustomImage extends BoxProps {
  src: string;
  alt?: string;
}

const CustomImage = (props: ICustomImage) => {
  const { src, alt } = props;

  return (
    <Box {...props}>
      <div className={styles.imageContainer}>
        <Image
          src={src ? src : ""}
          layout="fill"
          className={styles.image}
          alt={alt ? alt : ""}
          objectPosition="center"
        />
      </div>
    </Box>
  );
};

export default CustomImage;
