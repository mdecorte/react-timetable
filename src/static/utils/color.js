export default function randomColorCode () {
  const randomNumber = Math.floor(Math.random() * 256)
  const randomNumberTwo = Math.ceil(Math.random() * 25 + 50)
  const color = `hsla(${randomNumber},${randomNumberTwo}%,50%,1)`
  const colorDark = `hsla(${randomNumber},${randomNumberTwo}%,40%,1)`

  return {color, colorDark}
}
