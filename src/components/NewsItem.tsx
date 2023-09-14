import { Link, Typography } from "@mui/material";

type Props = {
  children: string;
};

function NewsItem({ children }: Props) {
  const splitBase = "더보기 ▶ "; // 문자열을 자르는 기준
  const content = children.split(splitBase)[0];
  const href = children.split(splitBase)[1];

  return (
    <Typography
      variant="body1"
      fontFamily={"Pretendard-Regular"}
      sx={{ color: "#121212", padding: 2 }}
    >
      {content}
      <Link href={href} sx={{ mx: 0.5 }}>
        자세히 보기
      </Link>
    </Typography>
  );
}

export default NewsItem;
