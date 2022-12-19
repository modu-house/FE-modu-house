const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(32),
  subtitle: pixelToRem(24),
  paragraph: pixelToRem(16),
};

const colors = {
  text1: '#000000',
  text2: '#D3D3D3',
  text3: '#808080',
  primary1: '#FEA1A1',
  bg_paper1: '#F9FAFB',
  bg_paper2: '#FFFFFF',
  button_text: '#FFFFFF',
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  boxShadow: `
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;
