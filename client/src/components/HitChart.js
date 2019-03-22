import React from 'react';

class HitChart extends React.Component {

    state={ rulenumber: 1 }

    ruleExplained = () => {
        if(this.state.rulenumber === 1){
            return(
                <div>first rule</div>
            )
        }
        else if(this.state.rulenumber === 2){
            return(
                <div>second rule</div>
            )
        }
        else if(this.state.rulenumber === 3){
            return(
                <div>third rule</div>
            )
        }    
        else{
            return(
                <div>
                    <div>No Rules Found</div>    
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
    

    render(){
        return(
            <div>
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
                            <div className='description'>Is the value under or over 5?</div>
                        </div>
                    </div>
                
                    <div onClick={this.clickedStepThree} className='step'>
                        <div className='content'>
                            <div className='title'>Check Banker's side</div>
                            <div className='description'>Is the value under or over 5?</div>
                        </div>
                    </div>
                </div>
                <div className='ui segment'>
                    {this.ruleExplained()}
                </div>

            </div>
        )
    }
}
export default HitChart;