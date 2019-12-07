import styled, { keyframes, createGlobalStyle } from "styled-components";
import { fadeIn } from "react-animations";
import Container from '@material-ui/core/Container';

const fadeInAnimation = keyframes`${fadeIn}`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`

export const Box = styled.div`
  padding-top: 1em;
  margin-bottom: 2em;
  border-radius: 25px;
  background-image: radial-gradient(circle, #d7dde8, #ffffff);
`;

export const RulesWrapper = styled(Container)`
  animation: 1s ${fadeInAnimation};
  position: relative;
  padding-top: 15vh;
`;

export const StyledCard = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const StyledCardWrapper = styled.div`
  width: 20%;
`

export const StyledPlaceHolder = styled.div`
  width: 10% !important;
`
