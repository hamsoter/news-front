import React from "react";
import { Button, Snackbar } from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";

type Props = {
  content: string;
};

function CopyButton({ content }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{ marginX: 0.5 }}
        onClick={() => {
          window.navigator.clipboard.writeText(content);
          setOpen(true);
        }}
      >
        전체 복사<CopyAllIcon fontSize="small"></CopyAllIcon>
      </Button>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        ContentProps={{
          sx: { background: "#34a746" },
        }}
        sx={{ mb: "100px" }}
        message="복사 완료!"
      />
    </>
  );
}

export default CopyButton;
