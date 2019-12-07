import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const HeaderWrapper = styled(AppBar)`
  background: transparent !important;
  margin-bottom: 0 !important;
  box-shadow: none !important;
`;

export const StyledAnchor = styled(Link)`
    display: flex !important; 
    margin: auto 2rem !important;
    @media screen and (max-width: 600px){
        font-size: 0.8rem;
    }
    i {
        background: -webkit-linear-gradient(right, #ECE9E6, #FFFFFF,#ECE9E6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: auto 1.5rem !important;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: black;
    font-size: 2rem;
`