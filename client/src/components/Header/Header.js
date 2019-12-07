import React from "react";
import ToolBar from '@material-ui/core/Toolbar';
import {faCircleNotch, faDiceThree, faBookOpen, faBook} from '@fortawesome/free-solid-svg-icons'

import {HeaderWrapper, StyledAnchor, StyledIcon} from './Header.style';


const Header = () => {
  return (
    <HeaderWrapper>
      <ToolBar>
      <StyledAnchor to="/">
          <StyledIcon icon={faCircleNotch} />
      </StyledAnchor>
      
      <StyledAnchor to="/rules">
        <StyledIcon icon={faBookOpen} />
      </StyledAnchor>

      <StyledAnchor to="/game">
        <StyledIcon icon={faDiceThree} />
      </StyledAnchor>

      </ToolBar>
    </HeaderWrapper>
  );
};

export default Header;
