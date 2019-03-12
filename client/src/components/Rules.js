import React from 'react';

const Rules = () => {
    return(
        <div>
            <h1>How to Play</h1>
            <h4 className='ui horizontal divider header'>
                Intro
            </h4>
            <div>this is the intro</div>

            <h4 className='ui horizontal divider header'>
                Basics
            </h4>
            <div>
                card delivery
                definitions (naturals)
                values
            </div>
            

            <h4 className='ui horizontal divider header'>
                Step by step
            </h4>

            {/* Steps */}
            <div className='ui ordered steps'>
                <div className='step'>
                    <div className='content'>
                        <div className='title'>Check For Naturals</div>
                        <div className='description'>Is either side an 8 or 9?</div>
                    </div>
                </div>
                <div className='active step'>
                    <div className='content'>
                        <div className='title'>Check Player's side</div>
                        <div className='description'>Is the value under or over 5?</div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Rules;