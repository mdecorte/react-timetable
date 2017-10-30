import React, { Component } from 'react'
import artists from './data/artists.json'
import days from './data/days.json'
import './App.css'

import TimeTable from './containers/TimeTable'

class App extends Component {

  constructor (props) {
    super(props)
    this.artists = artists
    this.days = days
  }

  render () {
    return (
      <div className="App">
        <TimeTable artists={this.artists} day={this.days['day1']}/>
      </div>
    )
  }
}

export default App
