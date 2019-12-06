import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 2em;
  background: transparent;
  padding-top: 1rem;
`;

const Link = styled.a`
  background: -webkit-linear-gradient(right, #ECE9E6, #FFFFFF,#ECE9E6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5em;
`;
 const StyledCopyright = styled.h3`
  background: -webkit-linear-gradient(right, #ECE9E6, #FFFFFF,#ECE9E6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 `

const Footer = () => {
  return (
    <Wrapper>
      <StyledCopyright>© 2019 Chris Y Cho</StyledCopyright>
      <div>
        <Link href="https://github.com/cycho04/Interactive-Game-Tutorial">
          <i className="github icon" />
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/chrisycho/">LinkedIn</Link>
      </div>
    </Wrapper>
  );
};
export default Footer;
