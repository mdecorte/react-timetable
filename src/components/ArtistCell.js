import React from 'react'
import './ArtistCell.css'

export default function ArtistCell (props) {
  const theStijl = {
    top: props.top,
    height: props.height,
    backgroundColor: props.color
  }

  return (
    <div className='ArtistCell' onClick={props.handleClick} style={theStijl}>
      <h5>{props.artistTitle}</h5>
    </div>
  )
}
