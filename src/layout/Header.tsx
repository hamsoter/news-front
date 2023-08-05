import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          몽땅뉴스
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
