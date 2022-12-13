import React, { useState, useCallback, ChangeEvent } from "react";
import { IInput, Input } from "./input";
import _ from "lodash";

interface ISearchInput extends IInput {
  debounceTime?: number;
}

export const SearchInput = (props: ISearchInput) => {
  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFunction = useCallback(
    _.debounce(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (props?.onChange) {
          props?.onChange(e);
        }
      },
      props?.debounceTime ? props?.debounceTime : 1000
    ),
    []
  );

  return (
    <>
      <Input
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e?.target?.value);
          debounceFunction(e);
        }}
      />
    </>
  );
};
