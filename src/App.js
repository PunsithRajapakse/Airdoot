import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home/Home";
import Header from "./Components/Header/Header";
import Services from "./Routes/Services/Services";
import MoreServices from "./Routes/MoreServices/MoreServices";


function App() {
  return (
    <Router>

      <Header/>
      
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/moreservices" component={MoreServices} />
       
        
      </div>

      <Footer />
    </Router>
  );
}

export default App;
