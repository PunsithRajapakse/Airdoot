import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
        
      </div>

      <Footer />
    </Router>
  );
}

export default App;
