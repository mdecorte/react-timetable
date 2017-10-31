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
    top: props.top,
    height: props.height,
    width: 'calc(100% - 2em)',
    padding: '0 1em',
    backgroundColor: props.color,
  }

  return (
    <div className="ArtistCell" onClick={props.handleClick} style={theStijl}>
      <h5>{props.artistTitle}</h5>
    </div>
  )
}