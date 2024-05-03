import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Routes/Home/Home";
import Services from "./Routes/Services/Services"; // Assuming Services component is in src/Components/Services/Services.jsx
import MoreServices from "./Routes/MoreServices/MoreServices";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/moreservices" component={MoreServices} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
