import {createGlobalStyle} from 'styled-components'

export const GlobalIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1610498259661'); /* IE9 */
  src: url('./iconfont.eot?t=1610498259661#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1610498259661') format('woff'),
  url('./iconfont.ttf?t=1610498259661') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1610498259661#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 3vh;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
}
`