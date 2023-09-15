import { Box, Divider } from "@mui/material";
import CopyButton from "../components/CopyButton";
import KakaoShare from "../components/KakaoShare";
import Footer from "../layout/Footer";

type Props = {
  newsFullText: string;
  date: string;
};

function Share({ newsFullText, date }: Props) {
  return (
    <Box sx={{ paddingTop: 2, position: "absolute", bottom: 0, bgcolor: "#F0F0F0", width: "100%" }}>
      <Divider sx={{ fontSize: 14, paddingBottom: 1, fontFamily: "Pretendard-Regular" }}>
        이 소식을 공유해보세요
      </Divider>
      <Box display={"flex"} justifyContent={"center"} mt={1} mb={2}>
        <CopyButton content={newsFullText} />
        <KakaoShare content={newsFullText} date={date} />
      </Box>
      <Footer></Footer>
    </Box>
  );
}

export default Share;
