import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/footer" element={<Footer />} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
