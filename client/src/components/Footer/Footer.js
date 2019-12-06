import React from "react";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import {Wrapper, StyledLink, StyledCopyright, StyledIcon } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <StyledCopyright>© 2019 Chris Y Cho</StyledCopyright>
     
        <StyledLink href="https://github.com/cycho04/Interactive-Game-Tutorial">
          <StyledIcon icon={faGithub} />
          GitHub
        </StyledLink>
      
        <StyledLink href="https://www.linkedin.com/in/chrisycho/">
          <StyledIcon icon={faLinkedin} />
          LinkedIn
        </StyledLink>
    
    </Wrapper>
  );
};
export default Footer;
