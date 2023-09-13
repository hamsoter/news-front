import React, { forwardRef } from "react";

import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ko } from "date-fns/esm/locale";
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { add, compareAsc, sub } from "date-fns/esm";

interface RefProps extends Omit<ReactDatePickerProps, "onChange"> {
  onClick?(): void;
  onChange?(): void;
}

type Props = {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

const CustomDatePicker = ({ date, setDate }: Props) => {
  const today = new Date();

  // 선택된 날짜가 오늘 날짜인지 확인
  const isToday = (date ? compareAsc(sub(today, { days: 1 }), date) : -1) > 0 ? true : false;
  registerLocale("ko", ko);

  const DateButton = forwardRef(
    ({ value, onClick }: RefProps, ref: React.Ref<HTMLButtonElement>) => (
      <Button
        sx={{ color: "#121212", fontWeight: "bold" }}
        className="example-custom-input"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </Button>
    )
  );

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <Button
        sx={{ color: "#121212" }}
        onClick={() => {
          if (date) {
            const newDate = sub(date, { days: 1 });
            setDate(newDate);
          }
        }}
      >
        <ArrowBackIcon />
      </Button>
      <Box>
        <ReactDatePicker
          selected={date}
          popperPlacement="bottom"
          dateFormat={"yyyy년 MM월 dd일"}
          dateFormatCalendar="yyyy년 MM월"
          locale="ko"
          showPopperArrow={false}
          onChange={(date) => setDate(date)}
          customInput={<DateButton />}
          maxDate={new Date(today)}
        />
      </Box>
      <Button
        sx={{ color: "#121212" }}
        onClick={() => {
          if (date) {
            const newDate = add(date, { days: 1 });
            setDate(newDate);
          }
        }}
        disabled={!isToday}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
};

export default CustomDatePicker;
