import React, { forwardRef } from "react";

import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ko } from "date-fns/esm/locale";
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { add, compareAsc, isBefore, sub } from "date-fns/esm";

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

  const serviceStartDay = new Date(2023, 8, 14);

  const isServiceStartDay = date ? isBefore(serviceStartDay, date) : false;

  const DateButton = forwardRef(
    ({ value, onClick }: RefProps, ref: React.Ref<HTMLButtonElement>) => (
      <Button
        sx={{
          color: "#121212",
          fontWeight: "bold",
          fontFamily: "Pretendard-Regular",
        }}
        className="example-custom-input"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </Button>
    )
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: 2,
        py: 1,
      }}
    >
      <Button
        sx={{ color: "#121212" }}
        onClick={() => {
          if (date) {
            const newDate = sub(date, { days: 1 });
            setDate(newDate);
          }
        }}
        disabled={!isServiceStartDay}
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
          minDate={new Date(2023, 8, 13)}
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
