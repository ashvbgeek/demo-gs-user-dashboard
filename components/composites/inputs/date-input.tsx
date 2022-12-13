/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import { IInput, Input } from "./input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

interface IDateInput extends IInput {}

export const DateInput = (props: IDateInput) => {
  const [startDate, setStartDate] = useState<any>(null);
  const { title } = props;

  const CustomDateInput = React.forwardRef((props, ref) => (
    <Box position="relative">
      <Box
        fontSize="20px"
        as={BsCalendar}
        color="#D0D0D0"
        position="absolute"
        top="50%"
        left="16px"
        transform="translate(0,6px)"
      />
      <Input {...props} paddingLeft="48px" title={title} />
    </Box>
  ));

  return (
    <>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomDateInput />}
      />
    </>
  );
};
