import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/HeaderNew/Header.jsx";
import Home from "./Routes/Home/Home";
import Services from "./Routes/Services/Services";
import MoreServices from "./Routes/MoreServices/MoreServices";
import BuyForm from "./Routes/Form/Form";
import RollingPage from "./Components/Rollingpage/Rollingpage.jsx"; // Check the import path for RollingPage component

function App() {
  const [showApp, setShowApp] = useState(false);

  const handleRollingPageFinish = () => {
    setShowApp(true);
  };

  return (
    <>
      {/* {showApp ? ( */}
        <Router>
          {/* <Header /> */}
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/moreservices" component={MoreServices} />
            <Route exact path='/form' component={BuyForm} />
          </Switch>
          <Footer />
        </Router>
      {/* ) : (
        <RollingPage onFinish={handleRollingPageFinish} />
      )} */}
    </>
  );
}

export default App;