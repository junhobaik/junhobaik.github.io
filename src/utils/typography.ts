import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Apple SD Gothic Neo', 'Nanum Gothic'],
  bodyFontFamily: ['Apple SD Gothic Neo', 'Nanum Gothic'],
});

const googleFonts: { name: string; bold?: number[] }[] = [
  {
    name: 'Nanum Gothic',
    bold: [400, 700],
  },
  {
    name: 'Nanum Gothic Coding',
    bold: [400, 700],
  },
  { name: 'Raleway' },
];

const googleFont = googleFonts
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
