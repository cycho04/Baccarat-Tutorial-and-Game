import React from 'react';
import styled from 'styled-components';

import FirstRule from '../FirstRule/FirstRule';
import SecondRule from '../SecondRule/SecondRule';
import ThirdRule from '../ThirdRule/ThirdRule';
import FourthRule from '../FourthRule/FourthRule';

import '../GameRules.css';

const StyledSteps = styled.div`
    width: 25% !important;
`

const StyledStepsWrapper = styled.div`
    width: 100%;
`

const StyledText = styled.div`
    white-space: normal;
`


class HitChart extends React.Component {

    state={ rulenumber: 1 }

    ruleExplained = () => {
        if(this.state.rulenumber === 1){
            return(
                <FirstRule clickedStepTwo={this.clickedStepTwo}/>
            )
        }
        else if(this.state.rulenumber === 2){
            return(
                <SecondRule clickedStepThree={this.clickedStepThree} clickedStepFour={this.clickedStepFour}/>
            )
        }
        else if(this.state.rulenumber === 3){
            return(
                <ThirdRule />
            )
        }   
        else if(this.state.rulenumber === 4){
            return(
                <FourthRule />
            )
        }   
        else{
            return(
                <div>
                    <div>ERROR-No Rules Found</div>    
                </div>
            )    
        }
    }

    clickedStepOne = () => {
        this.setState({ rulenumber: 1})
    }
    clickedStepTwo = () => {
        this.setState({ rulenumber: 2})
    }
    clickedStepThree = () => {
        this.setState({ rulenumber: 3})
    }
    clickedStepFour = () => {
        this.setState({ rulenumber: 4})
    }
    

    render(){
        return(
            <>
                <h3 className="ui horizontal divider header">Step by step</h3>
            <div className='parent'>
                <div className='ui segment'>
                    <StyledStepsWrapper className='ui ordered steps'>      
                        <StyledSteps onClick={this.clickedStepOne} className='step'>
                            <div className='content'>
                                <div className='title'>Check For Naturals</div>
                                <div className='description'>Is either side an 8 or 9?</div>
                            </div>
                        </StyledSteps>
                        
                        <StyledSteps onClick={this.clickedStepTwo} className='step'>
                            <div className='content'>
                                <div className='title'>Check Player's side</div>
                                <div className='description'>Is it under or over 5 points?</div>
                            </div>
                        </StyledSteps>
                    
                        <StyledSteps onClick={this.clickedStepThree} className='step'>
                            <div className='content'>
                                <div className='title'>Check Banker's side</div>
                                <div className='description'>Is the value under or over 5?</div>
                            </div>
                        </StyledSteps>

                        <StyledSteps onClick={this.clickedStepFour} className='step'>
                            <div className='content'>
                                <StyledText className='title'>Check Banker's side/Player's hit card</StyledText>
                                <StyledText className='description'>Is the value under or over 5?</StyledText>
                            </div>
                        </StyledSteps>
                    </StyledStepsWrapper>
                </div>
                <div className='ui piled segment'>
                    {this.ruleExplained()}
                </div>
            </div>
            </>
        )
    }
}
export default HitChart;