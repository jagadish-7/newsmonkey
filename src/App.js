
import './App.css';
import { Navbar } from './myComponents/Navbar';
import { News } from './myComponents/News';




//class based components
import React, { Component } from 'react'

export default class App extends Component {
  // name = 'Jagadish'
  render() {
    return (

<>

      <Navbar/>
      <div className='container'>

        {/* Hello my dear friend = {this.name} */}

      </div>
      <News/>
</>
    )
  }
}
