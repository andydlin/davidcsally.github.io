import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: url(assets/pixel.cur), auto;
  }

  /* font loading */
  @font-face {
    font-family: 'Futura-Light';
    src: url('./fonts/Futura-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Futura-Medium';
    src: url('./fonts/Futura-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Futura-Bold';
    src: url('./fonts/Futura-Bold.woff') format('woff');
  }
`
