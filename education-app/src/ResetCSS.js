import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
   html, button {
      font-family: 'Lato', sans-serif;
   }
   *, *:after, *:before {
      box-sizing: border-box;
   }
   
   html, body, div, span, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   abbr, address, cite, code,
   del, dfn, em, img, ins, kbd, q, samp,
   small, strong, sub, sup, var,
   b, i,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, figcaption, figure,
   footer, header, hgroup, menu, nav, section, summary,
   time, mark, audio, video, button {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      font-weight: normal;
      vertical-align: baseline;
      background: transparent; 
      font-size: 62.5%;
   }
   
   body {
      line-height: 1; }
   
   article, aside, details, figcaption, figure,
   footer, header, hgroup, menu, nav, section {
      display: block; }
   
   nav, ul, li {
      list-style: none; }
   
   blockquote, q {
      quotes: none; }
   
   blockquote:before, blockquote:after,
   q:before, q:after {
      content: '';
      content: none; }
   
   a {
      text-decoration: none;
      color: inherit;
      margin: 0;
      padding: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent; }
   
   a:visited {
      color: inherti;
   }
   
   /* change colours to suit your needs */
   ins {
      background-color: #ff9;
      color: #000;
      text-decoration: none; }
   
   /* change colours to suit your needs */
   mark {
      background-color: #ff9;
      color: #000;
      font-style: italic;
      font-weight: bold; }
   
   del {
      text-decoration: line-through; }
   
   abbr[title], dfn[title] {
      border-bottom: 1px dotted;
      cursor: help; }
   
   table {
      border-collapse: collapse;
      border-spacing: 0; }
   
   /* change border colour to suit your needs */
   hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #cccccc;
      margin: 1em 0;
      padding: 0; }
   
   input, select {
      vertical-align: middle; }
`;

export default ResetCSS;
