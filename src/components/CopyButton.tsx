import React from "react";
import { Button } from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";

type Props = {
  content: string;
};

function CopyButton({ content }: Props) {
  return (
    <Button
      variant="outlined"
      sx={{ marginX: 0.5 }}
      onClick={() => {
        window.navigator.clipboard.writeText(content);
      }}
    >
      전체 복사<CopyAllIcon fontSize="small"></CopyAllIcon>
    </Button>
  );
}

export default CopyButton;
