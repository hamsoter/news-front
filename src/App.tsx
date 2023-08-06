import { Container } from "@mui/material";
import Header from "./layout/Header";
import MainContent from "./main/MainContent";

function App() {
  return (
    <Container
      maxWidth={"xs"}
      sx={{ padding: "0 !important", bgcolor: "#FEEEBD", height: "100vh" }}
    >
      <Header />
      <MainContent></MainContent>
    </Container>
  );
}

export default App;
