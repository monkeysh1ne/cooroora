function hexToRGB(hex) {
  // Remove the # character from the beginning of the hex code
  hex = hex.replace('#', '')

  // Convert the red, green, and blue components from hex to decimal
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  // Return the RGB value as a string
  return `rgb(${r}, ${g}, ${b})`
}
