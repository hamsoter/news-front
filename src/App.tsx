import { Container } from "@mui/material";
import Header from "./layout/Header";
import MainContent from "./main/MainContent";
import Footer from "./layout/Footer";

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
      }}
    >
      <Header />
      <MainContent></MainContent>
      <Footer></Footer>
    </Container>
  );
}

export default App;
