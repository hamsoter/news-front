import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "#F0F0F0", color: "#121212", boxShadow: "0 0 0 0 !important" }}
    >
      <Toolbar variant="dense">
        <Typography variant="h6" fontFamily={"Pretendard-Regular"} component="div">
          오늘의 짧은 뉴스
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
