import { nextArrowPosition, pointerToCanvasPoint, createPenState } from "../geometry.js";

describe("nextArrowPosition", () => {
  const width = 500;
  const height = 300;
  const step = 3;

  test("moves left and clamps at 0", () => {
    expect(nextArrowPosition("ArrowLeft", 2, 100, width, height, step)).toEqual({ x: 0, y: 100 });
  });

  test("moves right and clamps at width", () => {
    expect(nextArrowPosition("ArrowRight", width - 1, 100, width, height, step)).toEqual({
      x: width,
      y: 100,
    });
  });

  test("moves up and clamps at 0", () => {
    expect(nextArrowPosition("ArrowUp", 100, 1, width, height, step)).toEqual({ x: 100, y: 0 });
  });

  test("moves down and clamps at height", () => {
    expect(nextArrowPosition("ArrowDown", 100, height - 1, width, height, step)).toEqual({
      x: 100,
      y: height,
    });
  });

  test("returns an unchanged position for unrelated keys", () => {
    expect(nextArrowPosition("Enter", 10, 20, width, height, step)).toEqual({ x: 10, y: 20 });
  });
});

describe("pointerToCanvasPoint", () => {
  test("maps client coordinates 1:1 when the canvas isn't scaled", () => {
    const rect = { left: 10, top: 20, width: 500, height: 300 };
    expect(pointerToCanvasPoint(110, 120, rect, 500, 300)).toEqual({ x: 100, y: 100 });
  });

  test("scales client coordinates when the canvas is displayed smaller than its resolution", () => {
    const rect = { left: 0, top: 0, width: 250, height: 150 };
    expect(pointerToCanvasPoint(125, 75, rect, 500, 300)).toEqual({ x: 250, y: 150 });
  });
});

describe("createPenState", () => {
  test("tracks and updates position", () => {
    const pen = createPenState(1, 2);
    expect(pen.getPosition()).toEqual({ x: 1, y: 2 });

    pen.setPosition(5, 6);
    expect(pen.getPosition()).toEqual({ x: 5, y: 6 });
  });
});
