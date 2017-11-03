export default function randomColorCode () {

  const randomNumber = Math.round(Math.random() * 256)
  const color = `hsla(${randomNumber},65%,50%,1)`
  const colorDark = `hsla(${randomNumber},65%,40%,1)`

  return {color, colorDark}
}