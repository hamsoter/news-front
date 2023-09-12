import CustomDatePicker from "../components/CustomDatePicker";
import KakaoChannelButton from "../components/KakaoChannelButton";
import { Box, Typography } from "@mui/material";

function MainContent() {
  return (
    <>
      <Typography
        variant="body1"
        fontFamily={"Pretendard-Regular"}
        sx={{ color: "#121212", padding: 2 }}
      ></Typography>
      <CustomDatePicker></CustomDatePicker>
      <Box display="flex" justifyContent="center" padding={1}>
        <KakaoChannelButton />
      </Box>
    </>
  );
}

export default MainContent;
