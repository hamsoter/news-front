import { Container } from "@mui/material";
import Header from "./layout/Header";
import MainContent from "./main/MainContent";

function App() {
  return (
    <Container
      maxWidth={"xs"}
      sx={{
        padding: "0 !important",
        bgcolor: "#F0F0F0",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header />
      <MainContent></MainContent>
    </Container>
  );
}

export default App;
