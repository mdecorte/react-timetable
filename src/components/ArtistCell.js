import React from 'react'
import './ArtistCell.css'

export default function ArtistCell (props) {
  const theStijl = {
    top: props.top,
    height: props.height,
    backgroundColor: props.color
  }

  return (
    <div className='ArtistCell' style={theStijl} onClick={props.handleClick}>
      {/*<span onClick={props.toggleFavouriteArtist}>⚪</span>*/}
      <h5 className='artist-title'>{props.artistTitle}</h5>
      <h6>{props.start} - {props.end}</h6>
    </div>
  )
}
