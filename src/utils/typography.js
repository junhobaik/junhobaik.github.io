import Typography from 'typography';

const googleFont = [
  {
    name: 'Nanum Gothic',
    bold: [400, 700],
  },
  {
    name: 'Noto Sans KR',
    bold: [300, 400, 500],
  },
  { name: 'Josefin Sans' },
];

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  bodyWeight: '300',
  headerWeight: '700',
  boldWeight: '500 !important',
  headerFontFamily: ['Nanum Gothic'],
  bodyFontFamily: ['Noto Sans KR'],
});

const googleFontString = googleFont
  .map(v => {
    if (v.bold) {
      return `${v.name.replace(/ /gi, '+')}:${v.bold.toString()}`;
    } else {
      return `${v.name.replace(/ /gi, '+')}`;
    }
  })
  .join('|')
  .toString();
const { rhythm, scale } = typography;
export { googleFontString, rhythm, scale, typography as default };
