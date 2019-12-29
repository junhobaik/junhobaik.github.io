import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Nanum Gothic'],
  bodyFontFamily: ['Noto Serif KR'],
});

const googleFont = [
  {
    name: 'Nanum Gothic',
    bold: [400, 700],
  },
  {
    name: 'Nanum Gothic Coding',
    bold: [400, 700],
  },
  {
    name: 'Noto Serif KR',
    bold: [300, 400, 700],
  },
  { name: 'Raleway' },
]
  .map(v => {
    if (v.bold) {
      return `${v.name.replace(/ /gi, '+')}:${v.bold.toString()}`;
    } else {
      return `${v.name.replace(/ /gi, '+')}`;
    }
  })
  .join('%7C')
  .toString();

export { googleFont, typography as default };
