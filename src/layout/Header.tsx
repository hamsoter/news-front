import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "#F0F0F0", color: "#121212", boxShadow: "0 0 0 0 !important" }}
    >
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" fontFamily={"Pretendard-Regular"} component="div">
          빵이의 한줄 뉴스
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
