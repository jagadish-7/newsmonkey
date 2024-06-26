
import './App.css';
import { Navbar } from './myComponents/Navbar';
import { News } from './myComponents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";






//class based components
import React, { Component } from 'react'

export default class App extends Component {
  // name = 'Jagadish'
  render() {
    return (
      <Router>

<>

      <Navbar/>
      <div className='container'>

        {/* Hello my dear friend = {this.name} */}

      </div>
      

      <Routes>
      <Route  exact path ='/' element={<News key="general"  pageSize = {9} country = "in" category = "general"/> }> </Route>
      <Route  exact path ='/general' element={<News key="general" pageSize = {9} country = "in" category = "general"/> }> </Route>
      <Route  exact path ='/business' element={<News key="business" pageSize = {9} country = "in" category = "business"/> }> </Route>
      <Route  exact path ='/entertainment' element={<News key="entertainment" pageSize = {9} country = "in" category = "entertainment"/> }> </Route>
      <Route  exact path ='/health' element={<News  key="health" pageSize = {9} country = "in" category = "health"/> }> </Route>
      <Route  exact path ='/science'  element={<News key="science" pageSize = {9} country = "in" category = "science"/> }> </Route>
      <Route  exact path ='/sports'  element={<News key="sports" pageSize = {9} country = "in" category = "sports"/> }> </Route>
      <Route  exact path ='/technology' element={<News  key="technology" pageSize = {9} country = "in" category = "technology"/> }> </Route>


      </Routes>
        
      
</>
</Router>
    )
  }
}
