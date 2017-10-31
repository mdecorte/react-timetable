import React, { Component } from 'react'
import './TimeTable.css'
import Column from './Column'
import fixNegativeOrder from '../static/utils/time'
import randomColorCode from '../static/utils/color'

class TimeTable extends Component {

  constructor (props) {
    super(props)
    this.artists = props.artists
    this.day = props.day
    this.handleClick = props.handleClick
    this.time = fixNegativeOrder(this.day.time)
    this.artistsPerArea = this.getActs(this.day.events, this.day.areas)
    this.richArtistsPerArea = this.getActsWithPictures(this.artistsPerArea)

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
            ...images,
          }
        }
        return event
      }).map(artistObject => {
        return {
          ...artistObject,
          color: randomColorCode(),
        }
      })
    })
  }

  getActs (events, areas) {
    return areas.map(area => {
      return events.filter(e => {
        return e.area === area.ID
      }).map(x => {
        return fixNegativeOrder(x)
      })
    })
  }

  renderColumn = (artists, key) => (
    <Column key={key} artists={artists} offsetHeight={this.time.startMinutes} height={this.time.endMinutes - this.time.startMinutes} handleClick={this.handleClick}/>
  )

  render () {
    return (
      <div className='TimeTable'>
        {this.richArtistsPerArea.map(this.renderColumn)}
      </div>
    )
  }

}

export default TimeTable