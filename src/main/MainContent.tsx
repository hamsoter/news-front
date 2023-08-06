import KakaoChannelButton from "../components/KakaoChannelButton";
import { Box, Typography } from "@mui/material";

function MainContent() {
  return (
    <>
      <Typography
        variant="body1"
        fontFamily={"Pretendard-Regular"}
        sx={{ color: "#121212", padding: 2 }}
      >
        카톡으로 매일 받아보는 한줄짜리 뉴스!
      </Typography>
      <Box display="flex" justifyContent="center" padding={1}>
        <KakaoChannelButton />
      </Box>
    </>
  );
}

export default MainContent;
