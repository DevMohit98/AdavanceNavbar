import React from "react"
import NavBar from "./Component/NavBar"
import Hero from "./Component/Hero"
import Sidebar from "./Component/Sidebar"
import Submenu from "./Component/Submenu"
class App extends React.Component{
  render()
  {
    return(
      <>
      <NavBar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
      </>
    )
  }
}
export default App