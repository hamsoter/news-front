import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

type Props = {
  children: ReactNode;
};

function NewsItem({ children }: Props) {
  return (
    <Typography
      variant="body1"
      fontFamily={"Pretendard-Regular"}
      sx={{ color: "#121212", padding: 2 }}
    >
      {children}
    </Typography>
  );
}

export default NewsItem;
