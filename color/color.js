// Loopily Color Package
// Basic color utilities for strings and RGB manipulation

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

function toRGB(r, g, b) {
  r = clamp(Number(r) || 0, 0, 255)
  g = clamp(Number(g) || 0, 0, 255)
  b = clamp(Number(b) || 0, 0, 255)
  return { r, g, b }
}

function toHex(r, g, b) {
  const rgb = toRGB(r, g, b)
  return (
    "#" +
    [rgb.r, rgb.g, rgb.b]
      .map(x => x.toString(16).padStart(2, "0"))
      .join("")
  )
}

function fromHex(hex) {
  if (typeof hex !== "string") throw new Error("Invalid hex color")

  hex = hex.replace("#", "")

  if (hex.length !== 6) throw new Error("Hex must be 6 characters")

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  return { r, g, b }
}

function lighten(hex, amount = 20) {
  const { r, g, b } = fromHex(hex)
  return toHex(r + amount, g + amount, b + amount)
}

function darken(hex, amount = 20) {
  const { r, g, b } = fromHex(hex)
  return toHex(r - amount, g - amount, b - amount)
}

function mix(hex1, hex2, ratio = 0.5) {
  const c1 = fromHex(hex1)
  const c2 = fromHex(hex2)

  const r = c1.r + (c2.r - c1.r) * ratio
  const g = c1.g + (c2.g - c1.g) * ratio
  const b = c1.b + (c2.b - c1.b) * ratio

  return toHex(r, g, b)
}

module.exports = {
  toRGB,
  toHex,
  fromHex,
  lighten,
  darken,
  mix
}
