// Loopily Math Package
// Supports numbers, strings (safe coercion), arrays, and big operations

function toNumber(v) {
  if (typeof v === "number") return v
  if (typeof v === "string") return Number(v)
  if (typeof v === "boolean") return v ? 1 : 0
  if (v == null) return 0
  throw new Error("Invalid numeric value")
}

function isArray(v) {
  return Array.isArray(v)
}

const math = {

  // ---------------- BASIC ARITHMETIC ----------------

  add(a, b) {
    return toNumber(a) + toNumber(b)
  },

  sub(a, b) {
    return toNumber(a) - toNumber(b)
  },

  mul(a, b) {
    return toNumber(a) * toNumber(b)
  },

  div(a, b) {
    const B = toNumber(b)
    if (B === 0) throw new Error("Division by zero")
    return toNumber(a) / B
  },

  mod(a, b) {
    return toNumber(a) % toNumber(b)
  },

  pow(a, b) {
    return toNumber(a) ** toNumber(b)
  },

  // ---------------- COMPARISON ----------------

  eq(a, b) {
    return toNumber(a) === toNumber(b)
  },

  gt(a, b) {
    return toNumber(a) > toNumber(b)
  },

  gte(a, b) {
    return toNumber(a) >= toNumber(b)
  },

  lt(a, b) {
    return toNumber(a) < toNumber(b)
  },

  lte(a, b) {
    return toNumber(a) <= toNumber(b)
  },

  // ---------------- UTILITY ----------------

  abs(a) {
    return Math.abs(toNumber(a))
  },

  round(a) {
    return Math.round(toNumber(a))
  },

  floor(a) {
    return Math.floor(toNumber(a))
  },

  ceil(a) {
    return Math.ceil(toNumber(a))
  },

  min(...args) {
    return Math.min(...args.map(toNumber))
  },

  max(...args) {
    return Math.max(...args.map(toNumber))
  },

  clamp(value, min, max) {
    value = toNumber(value)
    return Math.max(toNumber(min), Math.min(toNumber(max), value))
  },

  // ---------------- RANDOM ----------------

  random(min = 0, max = 1) {
    return Math.random() * (toNumber(max) - toNumber(min)) + toNumber(min)
  },

  randomInt(min, max) {
    min = Math.ceil(toNumber(min))
    max = Math.floor(toNumber(max))
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  // ---------------- ARRAY HELPERS ----------------

  sum(arr) {
    if (!isArray(arr)) throw new Error("sum expects array")
    return arr.reduce((a, b) => a + toNumber(b), 0)
  },

  avg(arr) {
    if (!isArray(arr)) throw new Error("avg expects array")
    if (arr.length === 0) return 0
    return math.sum(arr) / arr.length
  },

  product(arr) {
    if (!isArray(arr)) throw new Error("product expects array")
    return arr.reduce((a, b) => a * toNumber(b), 1)
  },

  // ---------------- TRIG ----------------

  sin(x) {
    return Math.sin(toNumber(x))
  },

  cos(x) {
    return Math.cos(toNumber(x))
  },

  tan(x) {
    return Math.tan(toNumber(x))
  },

  asin(x) {
    return Math.asin(toNumber(x))
  },

  acos(x) {
    return Math.acos(toNumber(x))
  },

  atan(x) {
    return Math.atan(toNumber(x))
  },

  // ---------------- CONSTANTS ----------------

  PI: Math.PI,
  E: Math.E
}

module.exports = math
