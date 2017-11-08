import React from 'react'

export default function TimeColumn (props) {
  
  const theStijl = {
    height: props.height
  }


  const timeBlock = (time, key) => (
    <div key={key} className='timeBlock' style={theStijl}>{time}</div>
  )

  return (
    <div className='Column Column-time'>
      {props.quarters.map(timeBlock)}
    </div>
  )
}
