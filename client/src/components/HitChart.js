import React from 'react';

import FirstRule from './FirstRule';
import SecondRule from './SecondRule';
import ThirdRule from './ThirdRule';
import FourthRule from './FourthRule';

import './styles/Rules.css';


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
            <div className='parent'>
                {/* Steps */}
                <div className='ui ordered steps'>      
                    <div onClick={this.clickedStepOne} className='step'>
                        <div className='content'>
                            <div className='title'>Check For Naturals</div>
                            <div className='description'>Is either side an 8 or 9?</div>
                        </div>
                    </div>
                    
                    <div onClick={this.clickedStepTwo} className='step'>
                        <div className='content'>
                            <div className='title'>Check Player's side</div>
                            <div className='description'>Is it under or over 5 points?</div>
                        </div>
                    </div>
                
                    <div onClick={this.clickedStepThree} className='step'>
                        <div className='content'>
                            <div className='title'>Check Banker's side</div>
                            <div className='description'>Is the value under or over 5?</div>
                        </div>
                    </div>

                    <div onClick={this.clickedStepFour} className='step'>
                        <div className='content'>
                            <div className='title'>Check Banker's side/Player's hit card</div>
                            <div className='description'>Is the value under or over 5?</div>
                        </div>
                    </div>
                </div>
                <div className='ui piled segment'>
                    {this.ruleExplained()}
                </div>

            </div>
        )
    }
}
export default HitChart;