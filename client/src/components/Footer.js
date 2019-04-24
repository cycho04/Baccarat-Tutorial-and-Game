import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 2em;
`;

const Link = styled.a`
  color: black;
  font-size: 1.5em;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="ui divider" />
      <h3>© 2019 Chris Y Cho</h3>
      <div>
        <Link href="https://github.com/cycho04/Interactive-Game-Tutorial">
          GitHub
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/chrisycho/">LinkedIn</Link>
      </div>
    </Wrapper>
  );
};
export default Footer;
