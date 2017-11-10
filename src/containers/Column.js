import React from 'react'
import './Column.css'
import ArtistCell from '../components/ArtistCell'

export default function Column (props) {
  const theStijl = {
    height: props.height
  }

  const renderArtistCell = (artist, key) => (
    <ArtistCell
      key={key}
      top={artist.startMinutes - props.offsetHeight}
      height={artist.length}
      color={artist.color}
      start={artist.start}
      end={artist.end}
      artistTitle={artist.title}
      handleClick={() => props.handleClick(artist)}
      toggleFavouriteArtist={() => props.toggleFavouriteArtist(artist)}
    />
  )

  return (
    <div className='Column' style={theStijl}>
      {props.artists.map(renderArtistCell)}
    </div>
  )
}
