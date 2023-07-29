import { css, createGlobalStyle } from 'styled-components'

const commonStyles = css`
  html,
  body {
    font-family: monaco, Consolas, Lucida Console, monospace;
    overflow: hidden;
    font-size: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(53, 59, 70);
  }

  #root {
    width: 100%;
    height: 100%;
  }
  #logs {
    position: fixed;
    top: 0;
    left: 0;
    white-space: pre;
  }
  #loading {
    color: #aaa;
    font-size: 30px;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  @media print {
    @page {
      size: auto;
      margin: 0;
    }
    body {
      position: static;
    }
  }
  .CodeMirror {
    font-family: monaco, Consolas, Lucida Console, monospace !important;
  }
`

export const GlobalStyle =
  process.platform !== 'darwin'
    ? createGlobalStyle`
        ${commonStyles}
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          background-color: #95959588;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #33333366;
        }
      `
    : createGlobalStyle`${commonStyles}`
