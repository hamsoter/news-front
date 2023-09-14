import { Box, Divider } from "@mui/material";
import NewsItem from "../components/NewsItem";
import { v4 as uuidv4 } from "uuid";

type Props = {
  newsList: string[];
  startMent: string;
};

function News({ newsList, startMent }: Props) {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <Divider
        sx={{ color: "#121212", padding: 2, fontSize: 14, fontFamily: "Pretendard-Regular" }}
      >
        {startMent}
      </Divider>
      {newsList.length && newsList.map((item) => <NewsItem key={uuidv4()}>{item}</NewsItem>)}
    </Box>
  );
}

export default News;
