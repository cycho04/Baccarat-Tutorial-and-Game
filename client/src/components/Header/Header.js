import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const HeaderWrapper = styled.div`
  animation: 4s ${fadeInAnimation};
  background-color: #414345 !important;
  margin-bottom: 0 !important;
`;

const StyledAnchor = styled.a`
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

const Header = () => {
  return (
    <HeaderWrapper className="ui secondary menu">
      <StyledAnchor className="item">
        <Link to="/">
          <i className="big black paper plane outline icon" />
        </Link>
      </StyledAnchor>
      <div className="right menu">
        <StyledAnchor className="item">
          <Link to="/rules">
            <i className="big black question circle outline icon" />
          </Link>
        </StyledAnchor>
        <StyledAnchor className="item">
          <Link to="/game">
            <i className="big black gamepad icon" />
          </Link>
        </StyledAnchor>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
