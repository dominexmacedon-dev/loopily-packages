module.exports = {
  add(a, b) {
    return Number(a) + Number(b)
  },

  sub(a, b) {
    return Number(a) - Number(b)
  },

  mul(a, b) {
    return Number(a) * Number(b)
  },

  div(a, b) {
    if (Number(b) === 0) {
      throw new Error("Division by zero")
    }
    return Number(a) / Number(b)
  },

  mod(a, b) {
    return Number(a) % Number(b)
  },

  pow(a, b) {
    return Number(a) ** Number(b)
  },

  floor(x) {
    return Math.floor(Number(x))
  },

  ceil(x) {
    return Math.ceil(Number(x))
  },

  round(x) {
    return Math.round(Number(x))
  },

  abs(x) {
    return Math.abs(Number(x))
  },
  sqrt(x) {
    return Math.sqrt(Number(x))
  },

  cbrt(x) {
    return Math.cbrt(Number(x))
  },

  log(x) {
    return Math.log(Number(x))
  },

  log10(x) {
    return Math.log10(Number(x))
  },

  sin(x) {
    return Math.sin(Number(x))
  },

  cos(x) {
    return Math.cos(Number(x))
  },

  tan(x) {
    return Math.tan(Number(x))
  },

  asin(x) {
    return Math.asin(Number(x))
  },

  acos(x) {
    return Math.acos(Number(x))
  },

  atan(x) {
    return Math.atan(Number(x))
  },
  PI: Math.PI,
  E: Math.E,
  min(...args) {
    return Math.min(...args.map(Number))
  },

  max(...args) {
    return Math.max(...args.map(Number))
  },

  clamp(x, min, max) {
    x = Number(x)
    min = Number(min)
    max = Number(max)

    if (x < min) return min
    if (x > max) return max
    return x
  },

  random(min = 0, max = 1) {
    min = Number(min)
    max = Number(max)
    return Math.random() * (max - min) + min
  },

  factorial(n) {
    n = Number(n)
    if (n < 0) throw new Error("Negative factorial")

    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  },

  isEven(n) {
    return Number(n) % 2 === 0
  },

  isOdd(n) {
    return Number(n) % 2 !== 0
  }
}
