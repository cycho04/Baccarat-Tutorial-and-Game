import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const HeaderWrapper = styled.div`
  animation: 4s ${fadeInAnimation};
`;

const Header = () => {
  return (
    <HeaderWrapper className="ui secondary menu">
      <a className="item">
        <Link to="/">
          <i className="huge black paper plane outline icon" />
        </Link>
      </a>
      <div className="right menu">
        <a className="item">
          <Link to="/rules">
            <i className="huge black question circle outline icon" />
          </Link>
        </a>
        <a className="item">
          <Link to="/game">
            <i className="huge black gamepad icon" />
          </Link>
        </a>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
