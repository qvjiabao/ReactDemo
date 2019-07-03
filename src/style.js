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
  src: url('../statics/iconfont/iconfont.eot?t=1562115523077'); /* IE9 */
  src: url('../statics/iconfont/iconfont.eot?t=1562115523077#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAR4AAsAAAAACUwAAAQsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqFbIUIATYCJAMUCwwABCAFhG0HUBsUCMguIScbXkIgUE2xbnBecU5JfvCt9qKVePh+v3buszVMQiExm7AkOp3pRNESmK49sqGAh/z/vs188COUrAtbE7Li0kDFIsASI8NS8aT15CoV05uZ3URP6pSbB5wUqIQRnvzA17dHyZy8ZoAY+tYqM2Kp+j+YnOX/3M/X5fGB5bVnc8lIjQYczWYJ1M0JNPv8PxD+ZXjVIe4AbhPAUJqRsNP61tFAUNEXBRAPomAEIqGiKiEEQqoBdhbA3qAi0nL8OvDq/X38wkYQAIk6g77y7KrOApUf8R/Lkfu/27mDAnZ/BrD7QAbGQAFxB5ouoCA0hpByokoh0DcMOOgrkv+x/D8KU8ZZi4igQiDD1/HPg2igi6Yw/jBcwMeqhZDBxw5CAh97CAE+9jk3RVTJ/CEwD3wQBwi/lpepaKFpfRxBxCIcRTM0nEysMT98yDx6xD54YLh/f7TaYgSMJAP45pne4cxuzynfMMMu9/FwkgkZTdp0Y8cF08i1CWOMx3Q+MAzyNOm9GR6W9ZDeUsPRnfC4zncuMNYbF4xnV+yINQRWxoz2s6PZ8d6gJ57d4xsWcPsLBF4sHMMHhBWeuPK42uKnSb7YsoBbaMOoCgZ7Tqm/JrAtdltScPfu7XHbEwO7JkbA3YgMxLr9Ux97dncLevIYbUGbn0xsPmIYmLDlyXvcbHzLFnyWwd8SWNEsxNGpiSlOS4i4fBmjrY90f4Tg9FXDnaG1d7iw//XQWt5hwKtNYvkj1e/ylAuFekxdRUvDGDF0oq6lsvj9JFa5lhj7O8lvg4BL00S9kKRfXFQnMAah2r9En5HlSR87Jp2p1y4Pqb10KSM7qzZkFaVfmbhSGJ1bNk6zMrT25waZ61aA+/LjBG3El+//+3sd/wspr25zwvKa0GWhuRktXNvXzrxhRHCdm5+bpM3Zntdpr6nOh2lXwqofmgHQhU6hSoAOGgSgOzqMcGg3BgR48gY+Obz0CFzLtslx2jnP0aWCemL4J9i12T8Pu2ZdUbi6uhap0GJJ6VUvLXgZCkNDC36aGAte9iNZrp1JIMRGkGilQkYYiC74kVDp5EJDqIChERr2j0STIVjpB2DdYgSYCAcAF+YUIBFuoFX4F6AW5xNoRAQCEhPRJ+oMDpGskTmjwlko00xKNEtO3tQqpJ/dzQlT7UY5zvWIDCf3iV4qi85MRxs4Jyf3saZvmpCtKDzFy5KDqkf3cXa7RLlkycqZFbpXUVzFej0PfYg2Sw4g1ZBxjBQcC4rJTBSRmcSJd1oryMzvd+MIprIzkkuKyrQMjqyPODwlCy2zBrpB5KxVdC7j+0wjyKZQ8NQ8nkziQKnHBo7dCEkoLniaFcdMQettEXAppifN+LoienyJ4xqzP9+S+mk1cAxhKkyNaYC8MjoFi9EqOv3wKiNuEsNTyaPMkmsmAA==') format('woff2'),
  url('../statics/iconfont/iconfont.woff?t=1562115523077') format('woff'),
  url('../statics/iconfont/iconfont.ttf?t=1562115523077') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('../statics/iconfont/iconfont.svg?t=1562115523077#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;