import React from "react";
import { Box, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        marginTop: 5,
        px: 2,
      }}
    >
      <Typography variant="h1">
        <ReportGmailerrorredIcon fontSize="large"></ReportGmailerrorredIcon>
      </Typography>
      <Typography variant="h6" fontFamily={"Pretendard-Regular"} p={1}>
        뉴스를 찾을 수 없습니다!
      </Typography>
      <Typography fontFamily={"Pretendard-Regular"} p={1}>
        뭔가 문제가 생긴 것 같습니다...! <br />
        다시 시도해주시거나, 아래 이메일로 연락 주세요!
      </Typography>

      <Button sx={{ m: 2, textTransform: "none" }} startIcon={<EmailIcon />}>
        supernyancat0w0@gmail.com
      </Button>
    </Box>
  );
}

export default Error;
