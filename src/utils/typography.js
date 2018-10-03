import Typography from 'typography'

const googleFont = [
  {
    name: 'Nanum Gothic Coding',
    bold: [400, 700]
  },
  {
    name: 'Nanum Gothic',
    bold: [400, 700]
  }
]

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Nanum Gothic Coding'
  ],
  bodyFontFamily: ['Nanum Gothic Coding'],
})


const googleFontString = googleFont.map(v =>{
  return `${v.name.replace(/ /gi, '+')}:${v.bold.toString()}`
}).join('|').toString();
const { rhythm, scale } = typography
export { googleFontString, rhythm, scale, typography as default }
