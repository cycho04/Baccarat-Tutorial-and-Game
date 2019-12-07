import styled, { keyframes, createGlobalStyle } from "styled-components";
import { fadeIn } from "react-animations";
import Container from '@material-ui/core/Container';

export const fadeInAnimation = keyframes`${fadeIn}`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: radial-gradient(#53a318, #348700);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`

export const GameWrapper = styled(Container)`
  text-align: center;
  animation: 1s ${fadeInAnimation};
  height: 80vh;
  padding-top: 15vh;
`