import React from 'react'
import './ArtistCard.css'

export default function ArtistCard (props) {
  const {artistCardActive, artistName, artistImage} = props
  const cN = `ArtistCard ${artistCardActive ? 'active' : ''}`
  return (
    <div className={cN}>
      <h1>{artistName}</h1>{
      artistImage &&
      <img src={artistImage[0]} alt={'Picture of ' + artistName}/>
    }
    </div>
  )
}

