# Loopily Color Package

A simple utility library for working with colors in Loopily.

## Features

- RGB conversion
- HEX conversion
- Lighten / Darken colors
- Mix two colors

---

## Functions

### toRGB(r, g, b)
Converts values to RGB object.

### toHex(r, g, b)
Converts RGB to HEX string.

### fromHex(hex)
Converts HEX to RGB object.

### lighten(hex, amount)
Lightens a color.

### darken(hex, amount)
Darkens a color.

### mix(hex1, hex2, ratio)
Mixes two colors.

---

## Example (Loopily)

```lol
import color

let c = color.toHex(255, 0, 0)
out(c)

out(color.lighten("#ff0000", 30))
out(color.mix("#ff0000", "#0000ff", 0.5))
