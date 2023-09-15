import { Box, Divider } from "@mui/material";
import CopyButton from "../components/CopyButton";
import KakaoShare from "../components/KakaoShare";

type Props = {
  newsFullText: string;
  date: string;
};

function Share({ newsFullText, date }: Props) {
  return (
    <Box sx={{ paddingTop: 2 }}>
      <Divider sx={{ fontSize: 14, paddingBottom: 1, fontFamily: "Pretendard-Regular" }}>
        이 소식을 공유해보세요
      </Divider>
      <Box display={"flex"} justifyContent={"center"} mt={1} mb={2}>
        <CopyButton content={newsFullText} />
        <KakaoShare content={newsFullText} date={date} />
      </Box>
    </Box>
  );
}

export default Share;
