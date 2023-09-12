import { Box } from "@mui/material";
import NewsItem from "../components/NewsItem";
import { v4 as uuidv4 } from "uuid";

type Props = {
  newsList: string[];
};

function News({ newsList }: Props) {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      {newsList.length && newsList.map((item) => <NewsItem key={uuidv4()}>{item}</NewsItem>)}
    </Box>
  );
}

export default News;
