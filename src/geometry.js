export function nextArrowPosition(key, x, y, width, height, step) {
  switch (key) {
    case "ArrowLeft":
      return { x: Math.max(0, x - step), y };
    case "ArrowRight":
      return { x: Math.min(width, x + step), y };
    case "ArrowUp":
      return { x, y: Math.max(0, y - step) };
    case "ArrowDown":
      return { x, y: Math.min(height, y + step) };
    default:
      return { x, y };
  }
}

export function pointerToCanvasPoint(clientX, clientY, rect, canvasWidth, canvasHeight) {
  const scaleX = canvasWidth / rect.width;
  const scaleY = canvasHeight / rect.height;
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY,
  };
}

export function createPenState(x, y) {
  let position = { x, y };
  return {
    getPosition: () => position,
    setPosition(nextX, nextY) {
      position = { x: nextX, y: nextY };
    },
  };
}
