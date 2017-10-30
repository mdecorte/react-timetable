import React from 'react'
import './Column.css'
import ArtistCell from '../components/ArtistCell'

export default function Column (props) {

  console.log(props)

  const renderArtistCell = (artist, key) => (
    <ArtistCell
      key={key}
      start={artist.start}
      end={artist.end}
      startMinutes={artist.startMinutes}
      endMinutes={artist.endMinutes}
      artistTitle={artist.title}
      handleClick={() => props.handleClick(artist)}
    />
  )

  return (
    <div className="Column">
      {props.artists.map(renderArtistCell)}
    </div>
  )

}
