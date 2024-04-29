import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Review"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import App from "../ac/Choose"
import BrandsPage from "../brands/Brands"
import ClientsPage from "../clients/clients"

const Home = () => {
  return (
    <>
      <Hero />
      <Team />
      <App/>
      <Featured />
      <Recent />
      <Location />
      <BrandsPage/>
      <ClientsPage/>
      <Price />
    </>
  )
}

export default Home
