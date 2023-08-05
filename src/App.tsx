import { Box, Button, Container } from "@mui/material";
import Header from "./layout/Header";

function App() {
  return (
    <Container
      maxWidth={"xs"}
      style={{ backgroundColor: "ghostwhite", padding: 0, height: "100vh" }}
    >
      <Header />
      <Box display="flex" justifyContent="center" padding={1}>
        <Button color="secondary" variant="outlined">
          카카오톡 채널 추가하기
        </Button>
      </Box>
    </Container>
  );
}

export default App;
