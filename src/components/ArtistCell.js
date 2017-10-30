import React from 'react'

export default function ArtistCell (props) {
  const theStijl = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    top: props.startMinutes - 840,
    height: props.endMinutes - props.startMinutes,
    width: 'calc(100% - 2em)',
    padding: '0 1em',
    backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
  }

  return (
    <div className="ArtistCell" onClick={props.handleClick} style={theStijl}>
      <h5>{props.artistTitle}</h5>
    </div>
  )
}