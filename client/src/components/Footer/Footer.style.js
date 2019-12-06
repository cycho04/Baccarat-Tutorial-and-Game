import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 2em;
  background: transparent;
  padding-top: 1rem;
`

export const StyledLink = styled.a`
  background: -webkit-linear-gradient(right, #ECE9E6, #FFFFFF,#ECE9E6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5em;
  display: block;
`

 export const StyledCopyright = styled.h3`
  background: -webkit-linear-gradient(right, #ECE9E6, #FFFFFF,#ECE9E6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 `

 export const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
 `