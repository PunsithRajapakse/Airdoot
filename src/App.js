import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
// import Clients from "./components/clients/clients";
import Home from "./Routes/Home";

function App() {
  return (
    <Router>


      <div className="App">
        <Route path="/"  component={Home}/>
        <Route path="/footer" component={Footer} />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
