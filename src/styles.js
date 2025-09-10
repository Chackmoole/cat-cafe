import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.FONTS.fontFamily};
  font-size: ${(props) => props.theme.FONTS.fontSizeDefault};
  line-height: 27px;
  font-weight: 400;
  color: ${(props) => props.theme.COLORS.colorBlackForText};
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);

  clip: rect(0 0 0 0);
  overflow: hidden;
}
  `;
