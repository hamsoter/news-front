import React, { forwardRef, useState } from "react";

import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ko } from "date-fns/esm/locale";
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props extends Omit<ReactDatePickerProps, "onChange"> {
  onClick?(): void;
  onChange?(): void;
}

const CustomDatePicker = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);
  registerLocale("ko", ko);

  const DateButton = forwardRef(({ value, onClick }: Props, ref: React.Ref<HTMLButtonElement>) => (
    <Button
      sx={{ color: "#121212", fontWeight: "bold" }}
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </Button>
  ));

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <Button sx={{ color: "#121212" }}>
        <ArrowBackIcon />
      </Button>
      <Box>
        <ReactDatePicker
          selected={startDate}
          popperPlacement="bottom"
          dateFormat={"yyyy년 MM월 dd일"}
          dateFormatCalendar="yyyy년 MM월"
          locale="ko"
          showPopperArrow={false}
          onChange={(date) => setStartDate(date)}
          customInput={<DateButton />}
          maxDate={new Date(today)}
        />
      </Box>
      <Button sx={{ color: "#121212" }}>
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default CustomDatePicker;
