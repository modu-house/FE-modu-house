import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}

body{
    font-family: 'Nanum Gothic', sans-serif;
    min-height: 667px;
}

a{
    color: inherit;
    text-decoration: inherit;
}
`;

export default Globalstyle;
