/* eslint-disable react/no-children-prop */
import { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input as CInput,
} from "@chakra-ui/react";
import { InputWrapper } from "./input";

interface IColorInput {
  setColor?: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  title: string;
  onChange?: (e: any) => void;
}

export const ColorInput = ({
  setColor,
  color,
  title,
  onChange,
}: IColorInput) => {
  const leftInput = () => {
    return (
      <CInput
        type="color"
        borderWidth="0"
        borderRadius="4px"
        w="36px"
        h="36px"
        p={0}
        value={color}
        onChange={(e) =>
          setColor ? setColor(e.target.value) : onChange && onChange(e)
        }
      />
    );
  };

  return (
    <>
      <InputWrapper title={title}>
        <InputGroup>
          <InputLeftElement
            // pointerEvents="none"
            p={0}
            h="100%"
            ml="10px"
            children={<>{leftInput()}</>}
          />
          <CInput
            type="tel"
            pl="58px"
            height="56px"
            value={color}
            onChange={(e) =>
              setColor ? setColor(e.target.value) : onChange && onChange(e)
            }
          />
        </InputGroup>
      </InputWrapper>
    </>
  );
};
