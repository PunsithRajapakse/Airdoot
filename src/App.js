import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Routes/Home/Home";
import Services from "./Routes/Services/Services"; // Assuming Services component is in src/Routes/Services/Services.jsx
import MoreServices from "./Routes/MoreServices/MoreServices";
import BuyForm from "./Routes/Form/Form";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* Define routes */}
        <Route exact path="/" component={Home} /> {/* Home route */}
        <Route exact path="/services" component={Services} /> {/* Services route */}
        <Route exact path="/moreservices" component={MoreServices} /> {/* MoreServices route */}
        <Route exact path='/form' component={BuyForm} /> {/* BuyForm route */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
