import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1564193230188'); /* IE9 */
  src: url('./iconfont.eot?t=1564193230188#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAS8AAsAAAAACeAAAARuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDQAqGXIVoATYCJAMYCw4ABCAFhG0HVxuVCFGULkqd7EdibCytORSh0Yw9B4QwlO/RePh3P/S+JD8FAAUo61miqq0jHrraqU3OuRm948fC789/m/qBKqkLnQlUXJD6FgHi5BEmTjZPrjIxvanJqZYPBZwXl6lfxx+srp29S6nNSqtU6Pn5uQKVUq0kQLFoAYljQD3D2MVlnCfQbd4E0H5lPQl8FNq0QNzqeCXwiamUEkLolNactUV8AZ460yf4GuCz+/PxT2r4kDSZdtHJeYUGFP+M/NSCyEMy6M4ykPszgNlExgagEG9yTfcQ37MB0S25POwC8upOSfo58SHzQ+GnlqEWgCvgrUjUrf+D14siSxpBVJqoF+EPvA0/I02Ews9MhMzPAoTEz0KEht8tnFOS1R5zR4DoJD5i/ELfJCs65HnBwf7aIB+fcAUkNN4fGjtmGnn8Prh3j4RICnr4kLE9oGkaJt9vYU484F1A/eAB7Rru36fyBJ4mw2cgBvORZ9jH0btsJx1jqZ3ysUCU9iNRg6Kj052AHtWuPKpwAN0Qegq134BsDGND7fnUkR3gdafCcRaCGHuEO5JZvj2ccq0II50MyXTZ3bZIZrdjrEt2FgjsUNjOufjltojCqFrjJCRHeIFLFhogqojBHJLvLHNtDd8a4961a1vEtmjXzp6g/FYEu8Jl59QX9h3r6HhOWEvgJUeOLIGL52lfKj7u0d/vcbyrbGPf/Fj1UK3B4Ez+ZuTxI2QzsunxY4uPUAYkbH78KGgWvHkzPFPnb/atyEyEpeOhccMTooIuXYLw4USw8ymGgVNc1e0x5bfZgCFV2QN9YRMFl6p0hQ89+gqt0vlsAqoEF8bSOv8eRV1x7rteRroaHd4XM/L3yARw0d+nko8hFuVU8DTFlzoXE0kptsSO9kS60nLvZX7lFy8mpaaU+63E+hXRK/j+6QWdXiv8y//9oYLoa6aL/fm3zE/t8/PP9wkD14bG/f8PlC9L2+yxrMx/qX/6CpK/undDc8ZYH/daJzk9xjvtbdurhFf4DwR4f131Q/kA2tPISaQYgHYon8qA9h1yCIHzxNBN/5XJH8BwFpj/30dRwHflnRtuRit7gPwKwO8kVpv937FrVhSZq6lrEcubEwSqS96vR+Qvq+N/sw170ZdlDAgNoZNlQ0g6zEHWaQFd8BvQ6LEJVact6LauanOPESJElC6sWQQgDNoPSb9vkA26ji7459AY9x2qwUCg22mE7tljKXRomcgqJVaDqWZgOrVg5gythHrxrSw/xagUo1yXSLOiVWfHUvDkpL+KNbNiHwusU/lUSeIwThRMWCW4jDUaBcwiCnpWLeFaSbLkEgSX9064WjAB1B4RS0nC0sCozIDRUROYcXZjCZr6/lYs3hRGSmJJWYmWxhJZ6XrHpMAl10BXicy1ys5lsNVUvFQSCYcncUQCE0wlNLCMukeAseSP0mOpSXDaFi6LXASqxdUV4eNLTFe5Cbppd9VIkaNEEzU6lBeLzoxySjOvUep1die4RAmrdIGJ8IlqwTIDAAAA') format('woff2'),
  url('./iconfont.woff?t=1564193230188') format('woff'),
  url('./iconfont.ttf?t=1564193230188') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1564193230188#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;