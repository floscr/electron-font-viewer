function wrapSvg (fontFamily) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <text x="0" y="100%" font-family=${fontFamily} font-size="150px">Aa</text>
</svg>`
}

const svg2png = require('svg2png')
const fs = require('pn/fs')

const Readable = require('stream').Readable
const s = new Readable // eslint-disable-line new-parens
s.push(wrapSvg('Idolwild'))
s.push(null) // End stream

const streamToPromise = require('stream-to-promise')

streamToPromise(s)
  .then(buffer => svg2png(buffer, { width: 300, height: 200 }))
  .then(buffer => fs.writeFile('dest.png', buffer))
  .catch(e => console.error(e))
