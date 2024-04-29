import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import BuyForm from "../form/form"
import Services from "../services/service"
import MoreServices from "../services/moreservice"
import Footer from "../common/footer/Footer"



const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={BuyForm} />
          <Route exact path='/service' component={Services} />
          <Route exact path='/moreservice' component={MoreServices} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
