import { Container } from "react-bootstrap";
import "./App.css";
import { SelectColor } from "./components/SelectColor";

function App() {
  return (
    <>
      <main className="py-5">
        <Container fluid className="d-flex justify-content-center p-0 p-md-2">
          <SelectColor />
        </Container>
      </main>
    </>
  );
}

export default App;
