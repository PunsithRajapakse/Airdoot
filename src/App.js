import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/HeaderNew/Header.jsx";
import Home from "./Routes/Home/Home";
import RollingPage from "./Components/Rollingpage/Rollingpage.jsx";
import ACSelection from "./Components/ACSelection/ACSelection.jsx";
import Banner from "./Components/Banner/Banner";
import Plan from "./Routes/Plan/Plan.jsx";
import NewFooter from "./Components/NewFooter/NewFooter.jsx";

function App() {
  const [showApp, setShowApp] = useState(false);
  const acSelectionRef = useRef(null);

  const handleRollingPageFinish = () => {
    setShowApp(true);
  };

  const scrollToACSelection = () => {
    if (acSelectionRef.current) {
      acSelectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showApp ? (
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <>
                  <Banner scrollToACSelection={scrollToACSelection} />
                  <div ref={acSelectionRef}>
                    <ACSelection />
                  </div>
                  <Home />
                </>
              )}
            />
            <Route path="/plans" component={Plan} />
          </Switch>
          <NewFooter />
        </Router>
      ) : (
        <RollingPage onFinish={handleRollingPageFinish} />
      )}
    </>
  );
}

export default App;
