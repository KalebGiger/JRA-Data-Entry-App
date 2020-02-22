import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {

    type:'dark',

    background: {
        default: "#303030"
      },

    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff9e19',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#11b5e3',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#000000',
    },
    // error: will use the default color
  },
});