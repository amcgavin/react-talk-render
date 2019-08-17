// adapted from https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
function HSVtoRGB(h, s, v) {
  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const mod = i % 6

  let r, g, b
  if (mod === 0) {
    r = v
    g = t
    b = p
  } else if (mod === 1) {
    r = q
    g = v
    b = p
  } else if (mod === 2) {
    r = p
    g = v
    b = t
  } else if (mod === 3) {
    r = p
    g = q
    b = v
  } else if (mod === 4) {
    r = t
    g = p
    b = v
  } else if (mod === 5) {
    r = v
    g = p
    b = q
  }
  return `#${Math.round(r * 255).toString(16)}${Math.round(g * 255).toString(16)}${Math.round(
    b * 255
  ).toString(16)}`
}

export default () => {
  return HSVtoRGB(Math.random(), Math.random(), 0.95)
}
