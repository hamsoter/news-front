import { Box, Button, Container } from "@mui/material";
import Header from "./layout/Header";
import KakaoChannelButton from "./components/KakaoChannelButton";

function App() {
  return (
    <Container
      maxWidth={"xs"}
      style={{ backgroundColor: "ghostwhite", padding: 0, height: "100vh" }}
    >
      <Header />
      <Box display="flex" justifyContent="center" padding={1}>
        <KakaoChannelButton></KakaoChannelButton>
      </Box>
    </Container>
  );
}

export default App;
