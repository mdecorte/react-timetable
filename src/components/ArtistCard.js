import React, { Component } from 'react'
import './ArtistCard.css'

class ArtistCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mouseInside: false,
      panelOpen: false,
    }
  }

  expandArtistInfo = () => {
    this.setState({
      mouseInside: true,
      panelOpen: true,
    })

  }

  hideArtistInfo = () => {
    this.setState({
      mouseInside: false,
    })
    setTimeout(() => {
      if (!this.state.mouseInside) {
        this.setState({
          panelOpen: false,
        })
      }
    }, 300)
  }

  render () {
    const {title, images, color, url} = this.props.artist
    const cN = `ArtistCard ${this.props.artistCardActive ? 'active' : ''}`
    const theOffset = this.state.panelOpen ? '0' : '-100%'
    const theStijl = {
      backgroundColor: color
    }
    const theStijlTwee = {
      backgroundColor: color,
      transform: `translateY(${theOffset})`
    }
    return (
      <div className={cN} onClick={this.props.handleClick} style={theStijl}>
        <h1>{title}</h1>
        <div className='image' onMouseEnter={this.expandArtistInfo} onMouseLeave={this.hideArtistInfo}>
          {
            images &&
            <img src={images[0]} alt={'Picture of ' + title}/>
          }
          <div className='artistInfo' style={theStijlTwee}>
            <p><a href={url} target="_blank">Add to Google Calendar</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistCard
