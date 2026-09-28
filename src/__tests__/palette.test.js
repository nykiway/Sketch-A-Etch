import { colors, strokes, toLabel } from "../palette.js";

test("toLabel capitalizes only the first word and replaces hyphens with spaces", () => {
  expect(toLabel("dark-blue")).toBe("Dark blue");
  expect(toLabel("black")).toBe("Black");
  expect(toLabel("thin-stroke")).toBe("Thin stroke");
});

test("every color has a unique className and valid hex values", () => {
  const classNames = colors.map((c) => c.className);
  expect(new Set(classNames).size).toBe(colors.length);

  colors.forEach((c) => {
    expect(c.hex).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(c.border).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });
});

test("stroke widths increase from thin to thick", () => {
  const widths = strokes.map((s) => s.width);
  expect(widths).toEqual([...widths].sort((a, b) => a - b));
  expect(new Set(widths).size).toBe(widths.length);
});
