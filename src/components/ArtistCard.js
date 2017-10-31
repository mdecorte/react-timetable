import React from 'react'
import './ArtistCard.css'

export default function ArtistCard (props) {

  const {artistCardActive, artistName, artistImage, artistColor} = props
  const cN = `ArtistCard ${artistCardActive ? 'active' : ''}`
  const theStijl = {
    backgroundColor: artistColor,
  }

  return (
    <div className={cN} onClick={props.handleClick} style={theStijl}>
      <h1>{artistName}</h1>
      <div className="image" style={{
        width: '240px',
        height: '240px',
        backgroundColor: artistColor
      }}>
        {
          artistImage &&
          <img src={artistImage[0]} alt={'Picture of ' + artistName}/>
        }
      </div>
    </div>
  )
}

