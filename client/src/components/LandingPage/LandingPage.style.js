import styled, { keyframes,createGlobalStyle, } from "styled-components";
import { fadeIn } from "react-animations";
import Button from '@material-ui/core/Button';


export const fadeInAnimation = keyframes`${fadeIn}`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(#53a318, #348700);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  animation: 1s ${fadeInAnimation};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const InnerBox = styled.div`
  background: transparent;
  padding: 1.5em;
  color: white;
  border-radius: 10px;
  width: 40%;
  @media screen and (max-width: 600px){
    width: 75%;
  }
`;

export const Text = styled.div`
  text-align: center;
  color: white;
  padding-bottom: 3rem;
`;

export const StyledButton = styled(Button)`
  width: 20%;
  box-sizing: border-box;
  margin: 0.1rem !important;
  height: 100% !important;
`

export const StyledButtonWrapper = styled.div`
  text-align: center;
`

export const StyledImg = styled.img`
  max-width: 350px;
`