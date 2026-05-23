// Loopily Color Package
// Simple ANSI terminal color support

const reset = "\x1b[0m"

function wrap(code) {
  return (text) => `${code}${text}${reset}`
}

const color = {

  // text colors
  red: wrap("\x1b[31m"),
  green: wrap("\x1b[32m"),
  yellow: wrap("\x1b[33m"),
  blue: wrap("\x1b[34m"),
  magenta: wrap("\x1b[35m"),
  cyan: wrap("\x1b[36m"),
  white: wrap("\x1b[37m"),
  gray: wrap("\x1b[90m"),

  // bright colors
  brightRed: wrap("\x1b[91m"),
  brightGreen: wrap("\x1b[92m"),
  brightYellow: wrap("\x1b[93m"),
  brightBlue: wrap("\x1b[94m"),

  // styles
  bold: wrap("\x1b[1m"),
  dim: wrap("\x1b[2m"),
  italic: wrap("\x1b[3m"),
  underline: wrap("\x1b[4m"),

  // background colors
  bgRed: wrap("\x1b[41m"),
  bgGreen: wrap("\x1b[42m"),
  bgYellow: wrap("\x1b[43m"),
  bgBlue: wrap("\x1b[44m"),
  bgMagenta: wrap("\x1b[45m"),
  bgCyan: wrap("\x1b[46m"),

  // reset helper
  reset(text) {
    return `${text}${reset}`
  }
}

module.exports = color
