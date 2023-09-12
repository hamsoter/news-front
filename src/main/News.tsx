import { Box } from "@mui/material";
import NewsItem from "../components/NewsItem";

type Props = {
  newsList: string[];
};

function News({ newsList }: Props) {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      {newsList.length && newsList.map((item) => <NewsItem>{item}</NewsItem>)}
    </Box>
  );
}

export default News;
