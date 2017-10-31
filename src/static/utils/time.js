function fixNegativeOrder (time) {
  const {start, end} = time
  const hours = x => Number(x.split(':')[0])
  const minutes = x => x.split(':')[1]

  if (hours(start) > hours(end)) {
    return timeToMinutes({
      ...time,
      start: `${hours(start)}:${minutes(start)}`,
      end: `${Number(hours(end)) + 24}:${minutes(end)}`,
    })
  }

  return timeToMinutes(time)
}

function timeToMinutes (time) {
  const {start, end} = time
  const hours = x => Number(x.split(':')[0])
  const minutes = x => Number(x.split(':')[1])

  if (hours(start) < 14) {
    return {
      ...time,
      startMinutes: (hours(start) + 24) * 60 + minutes(start),
      endMinutes: (hours(end) + 24) * 60 + minutes(end),
    }
  }

  return {
    ...time,
    startMinutes: hours(start) * 60 + minutes(start),
    endMinutes: hours(end) * 60 + minutes(end),
  }
}

export default fixNegativeOrder
