// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Container } from "react-bootstrap";
import AppRoutes from "./routes/routes";

import NavBar  from  "./components/navbar/navbar";
import Footer  from  "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRoutes/>
      <Footer />
    </div>
  );
}

export default App;