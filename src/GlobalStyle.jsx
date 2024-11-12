import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
  font-family: "dalmoori";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/dalmoori.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

body{
    background-color: #88ebff;
    font-family: "dalmoori";
}

button{
  font-family: inherit;
  font-size: 15px;
}

strong{
  color: red;
}
`;

export default GlobalStyle;
