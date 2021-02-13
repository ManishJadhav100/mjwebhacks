const colors = {
  black: '#000',
  gray: '#eee',
  secondaryBlack: '#444',
  secondaryGray: '#fafafa',
  white: '#fff',
  darkBlue: '#2B2E59',
};

const defaultTheme = {
  primary: colors.black,
  secondary: colors.secondaryBlack,
  primaryBackground: colors.white,
  secondaryBackground: colors.secondaryGray,
};

const darkTheme = {
  primary: colors.white,
  secondary: colors.gray,
  primaryBackground: colors.black,
  secondaryBackground: colors.secondaryBlack,
};

export default {
  ...colors,
  defaultTheme,
  darkTheme,
};
