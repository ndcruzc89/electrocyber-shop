// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/routes";

import NavBar  from  "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer  from  "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <Hero/>
      </header> 
      <main>
        <Container>
          <AppRoutes/>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;