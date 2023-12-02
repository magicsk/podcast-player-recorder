import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1f6ac8',
    },
    secondary: {
      main: '#660008',
    },
    background: {
      default: '#161e29',
      paper: '#1d2939',
    },
  },
})

export default theme
