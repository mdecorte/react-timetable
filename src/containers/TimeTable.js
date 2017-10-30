import React, { Component } from 'react'
import './TimeTable.css'
import Column from './Column'
import fixNegativeOrder from '../static/utils/times'
import ArtistCard from '../components/ArtistCard'

class TimeTable extends Component {

  constructor (props) {
    super(props)
    this.artists = props.artists
    this.day = props.day
    this.time = fixNegativeOrder(this.day.time)
    console.log(this.time)
    this.artistsPerArea = this.getActs(this.day.events, this.day.areas)
    this.richArtistsPerArea = this.getActsWithPictures(this.artistsPerArea)
    this.state = {
      activeArtist: this.artists[0],
      artistCardActive: false,
    }
  }

  getActsWithPictures (stages) {
    return stages.map(events => {
      return events.map(event => {
        const images = this.artists.find(artist => {
          return artist.name === event.title
        })
        if (images) {
          return {
            ...event,
            ...images
          }
        }
        return event
      })
    })
  }

  getActs (events, areas) {
    return areas.map(area => {
      return events.filter(e => {
        return e.area === area.ID
      }).map(x => {
        return fixNegativeOrder(x)
      }).map(y => {
        console.log(y.start)
        return y
      })
    })
  }

  handleClick (artist) {
    this.setState({
      activeArtist: artist,
      artistCardActive: !this.state.artistCardActive,
    })
  }

  renderColumn (artists, key) {
    return <Column
      key={key}
      artists={artists}
      handleClick={this.handleClick.bind(this)}
    />
  }

  render () {
    return (
      <div className="TimeTable">
        {/*<Column artists={this.artists} handleClick={this.handleClick.bind(this)} />*/} {this.richArtistsPerArea.map((artists, index) => this.renderColumn(artists, index))}
        <ArtistCard artistCardActive={this.state.artistCardActive} artistName={this.state.activeArtist.title} artistImage={this.state.activeArtist.images}/>
      </div>
    )
  }

}

export default TimeTable