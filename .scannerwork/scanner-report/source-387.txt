export function setPosition(max, position, direction) {
  let newPosition;
  switch (direction) {
    case 'ArrowRight':
      newPosition = position + 1 < max ? position + 1 : 0;
      break;
    case 'ArrowLeft':
      newPosition = position - 1 < 0 ? max - 1 : position - 1;
      break;
    case 'ArrowDown':
      newPosition = position + 1 < max ? position + 1 : 0;
      break;
    case 'ArrowUp':
      newPosition = position - 1 < 0 ? max - 1 : position - 1;
      break;
    default:
      newPosition = position;
  }
  return newPosition;
}
