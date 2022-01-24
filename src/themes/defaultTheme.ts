import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    button: {
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 3
  }
})
