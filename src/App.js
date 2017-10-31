import React, { Component } from 'react'
import artists from './data/artists.json'
import days from './data/days.json'
import './App.css'
import ArtistCard from './components/ArtistCard'

import TimeTable from './containers/TimeTable'

class App extends Component {

  constructor (props) {
    super(props)
    this.artists = artists
    this.days = days
    this.state = {
      activeArtist: this.artists[0],
      artistCardActive: false,
    }
  }

  handleClick = (artist) => {
    this.setState({
      activeArtist: artist,
      artistCardActive: !this.state.artistCardActive,
    })
  }

  clickArtistCard = () => {
    this.setState({
      artistCardActive: false,
    })
  }

  render () {
    const {title, images, color} = this.state.activeArtist
    const cN = `time-table-container ${this.state.artistCardActive ? 'artist-card-active' : ''}`
    return (
      <div className='App'>
        <div className={cN}>
          <h2 className="tt-Title">day 1</h2>
          <TimeTable artists={this.artists} day={this.days['day1']} handleClick={this.handleClick}/>
          <h2 className="tt-Title">day 2</h2>
          <TimeTable artists={this.artists} day={this.days['day2']} handleClick={this.handleClick}/>
          <h2 className="tt-Title">day 3</h2>
          <TimeTable artists={this.artists} day={this.days['day3']} handleClick={this.handleClick}/>
        </div>
        <ArtistCard artistCardActive={this.state.artistCardActive} handleClick={this.clickArtistCard} artistName={title} artistImage={images} artistColor={color}/>
      </div>
    )
  }
}

export default App
