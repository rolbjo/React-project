export const generateVinePosition = (index) => {
  const row = Math.floor(index / 2)
  const isRight = row % 2 === 0
  return isRight
    ? { top: '-50px', right: '-120px', transform: 'rotate(90deg)' }
    : { top: '-50px', left: '-120px', transform: 'scaleX(-1) rotate(90deg)' }
}
