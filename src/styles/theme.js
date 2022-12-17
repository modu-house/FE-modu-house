const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(32),
  subtitle: pixelToRem(24),
  paragraph: pixelToRem(16),
};

const colors = {
  text1: '#000000',
  text2: '#D3D3D3',
  primary1: '#FEA1A1',
  bg_paper1: '#F9FAFB',
  bg_paper2: '#FFFFFF',
  button_text: '#FFFFFF',
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;
