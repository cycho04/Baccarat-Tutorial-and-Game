import React, {Component} from 'react';
import { StyledCard, StyledCardWrapper, StyledPlaceHolder } from '../GameRules.style';


class FromTheTop extends Component {
    state = { first: false, second: false, third: false, fourth: false };

    renderCard = () => {
      setTimeout(() => {
        this.setState({ first: true });
      }, 500);
      setTimeout(() => {
        this.setState({ second: true });
      }, 1500);
      setTimeout(() => {
        this.setState({ third: true });
      }, 2500);
      setTimeout(() => {
        this.setState({ fourth: true });
      }, 3500);
      setTimeout(() => {
        this.setState({
          first: false,
          second: false,
          third: false,
          fourth: false
        });
      }, 5000);
    };

    render(){
      const {first, second, third, fourth } = this.state;

      return(
          <>
              <h4 className="ui horizontal divider header">Basics</h4>
              <div className='ui pild segment'>
              <h2 className="ui header">Let's start from the top.</h2>
              <p>
                  Baccarat is a card game that is dealt from a shoe that typically
                  holds 8 standard 52-card decks(416 cards total). Before the hands
                  are dealt, bets may be placed on the banker hand or on the player
                  hand. Each side is dealt 2 cards each in
                  alternating fashion like so:
              </p>
              <div className="parent">
              <StyledCardWrapper className="rules-card">
                <StyledCard
                  src={fourth ? "./images/4S.jpg" : "./images/Red.jpg"}
                  alt="Banker's 2nd card"
                />
              </StyledCardWrapper>
              <StyledCardWrapper className="rules-card">
                <StyledCard
                  src={second ? "./images/2C.jpg" : "./images/Red.jpg"}
                  alt="Banker's 1st card"
                />
              </StyledCardWrapper>
              
              <StyledPlaceHolder className="rules-card" />
              
              <StyledCardWrapper className="rules-card">
                <StyledCard
                  src={third ? "./images/3D.jpg" : "./images/Blue.jpg"}
                  alt="Player's 2nd card"
                />
              </StyledCardWrapper>
              <StyledCardWrapper className="rules-card">
                <StyledCard
                  src={first ? "./images/AH.jpg" : "./images/Blue.jpg"}
                  alt="Player's 1st card"
                />
              </StyledCardWrapper>
              <div>
                <button className="ui green button" onClick={this.renderCard}>
                  Deal Cards
                </button>
              </div>
            </div>
  
              <p>
                  Now after the initial deal, each side can receive a third card.
                  We'll go over this step-by-step very soon. For now let's
                  practice finding the values
              </p>
              </div>
          </>
      )
    }
}

export default FromTheTop;