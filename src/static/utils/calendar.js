export default function (event, dateDay) {
  const {
    title,
    area: location,
    start,
    end,
  } = event
  const text = title.split(' ').join('+')
  const dates = `${dateDay}T${start.split(':')[0]}${start.split(':')[1]}00Z%2F${dateDay}T${end.split(':')[0]}${end.split(':')[1]}00Z`
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${text}&location=area+${location}&dates=${dates}`
}