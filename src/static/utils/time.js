const hours = x => Number(x.split(':')[0])
const minutes = x => Number(x.split(':')[1])

function fixTime (time, multiplier = 1) {
  const {start, end} = time

  let startHours = hours(start)
  let endHours = hours(start) > hours(end) ? hours(end) + 24 : hours(end)

  if (startHours < 12) {
    startHours += 24
    endHours += 24
  }

  const startMinutes = startHours * 60 + minutes(start)
  const endMinutes = endHours * 60 + minutes(end)

  return {
    ...time,
    startMinutes: startMinutes * multiplier,
    endMinutes: endMinutes * multiplier,
    length: (endMinutes - startMinutes) * multiplier,
  }

}

function timeToQuarters (time, multiplier = 1) {
  const {startMinutes, endMinutes} = time
  let minutes = startMinutes / multiplier
  const minutesArray = []

  while (minutes <= endMinutes / multiplier) {
    minutesArray.push(minutes)
    minutes += 15
  }

  return minutesArray.map(x => {
    const m = x % 60
    const h = (x - m) / 60
    return `${h < 24 ? h : h - 24}:${m === 0 ? '00' : m}`
  })

}

export { fixTime, timeToQuarters }
