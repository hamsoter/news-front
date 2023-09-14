import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

function SkeletonNews() {
  return (
    <Box sx={{ p: 2 }}>
      <Skeleton animation="wave" sx={{ height: 31 }} />
      <Skeleton animation="wave" sx={{ height: 31 }} />
      <Skeleton animation="wave" sx={{ height: 31 }} />
      <Skeleton animation="wave" sx={{ height: 31, width: "40%" }} />
    </Box>
  );
}

export default SkeletonNews;
