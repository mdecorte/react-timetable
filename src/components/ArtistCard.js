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
    const {title, images, url} = this.props.artist

    return (
      <div className={`ArtistCard ${this.props.artistCardActive ? 'active' : ''}`} onClick={this.props.handleClick}>
        <div className="clickArea">
          <h1>{title}</h1>
          <div className='image' onMouseEnter={this.expandArtistInfo} onMouseLeave={this.hideArtistInfo}>
            {
              images &&
              <img src={images[0]} alt={'Picture of ' + title}/>
            }
            <div className={`artistInfo ${this.state.panelOpen ? 'active' : ''}`}>
              <p><a href={url} target="_blank">Add to Google Calendar</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistCard
