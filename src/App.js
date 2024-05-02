import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home/Home";
import Header from "./Components/Header/Header";



function App() {
  return (
    <Router>

      <Header/>
      
      <div className="App">
        <Route path="/" component={Home} />
        
       
        
      </div>

      <Footer />
    </Router>
  );
}

export default App;
