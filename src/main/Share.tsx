import React from "react";
import { Box, Divider } from "@mui/material";
import CopyButton from "../components/CopyButton";
import KakaoShare from "../components/KakaoShare";

function Share() {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Divider sx={{ fontSize: 14 }}>이 소식을 공유해보세요</Divider>
      <Box display={"flex"} justifyContent={"center"} marginY={1}>
        <CopyButton />
        <KakaoShare />
      </Box>
    </Box>
  );
}

export default Share;
