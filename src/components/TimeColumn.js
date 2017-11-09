import React from 'react'

export default function TimeColumn (props) {
  const timeBlock = (time, key) => (
    <div key={key} className='timeBlock' style={{height: props.height}}>{time}</div>
  )

  return (
    <div className='Column Column-time'>
      {props.quarters.map(timeBlock)}
    </div>
  )
}
