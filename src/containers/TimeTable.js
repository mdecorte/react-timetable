import React, { Component } from 'react'
import './TimeTable.css'
import TimeColumn from '../components/TimeColumn'
import Column from './Column'
import { fixTime, timeToQuarters } from '../static/utils/time'
import randomColorCode from '../static/utils/color'
import calendar from '../static/utils/calendar'

class TimeTable extends Component {

  constructor (props) {
    super(props)
    this.multiplier = 2
    this.time = fixTime(this.props.day.time, this.multiplier)
    this.quartersArray = timeToQuarters(this.time, this.multiplier)
    this.artistsPerArea = this.getActs(this.props.day.events, this.props.day.areas)
    this.richArtistsPerArea = this.getActsWithPictures(this.artistsPerArea)
  }

  getActsWithPictures (stages) {
    return stages.map(events => events
      .map(x => this.addImages(x, this.props.artists))
      .map(this.addColor)
      .map(x => this.addCalendarUrl(x, this.time.date))
    )
  }

  addCalendarUrl (event, date) {
    return {
      ...event,
      url: calendar(event, date),
    }
  }

  addColor (event) {
    const {color, colorDark} = randomColorCode()
    return {
      ...event,
      color: color,
      colorDark: colorDark,
    }
  }

  addImages (event, artists) {
    const images = artists.find(artist => {
      return artist.name === event.title
    })
    return {
      ...event,
      ...images,
    }
  }

  getActs (events, areas) {
    return areas.map(area => {
      return events.filter(e => {
        return e.area === area.ID
      }).map(x => {
        return fixTime(x, this.multiplier)
      })
    })
  }

  renderColumn = (artists, key) => (
    <Column
      key={key}
      artists={artists}
      offsetHeight={this.time.startMinutes}
      height={this.time.length}
      handleClick={this.props.handleClick}
    />
  )

  render () {
    return (
      <div className='TimeTable'>
        <TimeColumn quarters={this.quartersArray} height={15 * this.multiplier}/>
        {this.richArtistsPerArea.map(this.renderColumn)}
      </div>
    )
  }

}

export default TimeTable