import React from "react";
import { Button } from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";

function CopyButton() {
  return (
    <Button variant="outlined" sx={{ marginX: 0.5 }}>
      전체 복사<CopyAllIcon fontSize="small"></CopyAllIcon>
    </Button>
  );
}

export default CopyButton;
