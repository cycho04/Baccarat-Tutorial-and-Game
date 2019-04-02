import React from 'react';
import { connect } from 'react-redux';

import './styles/Cards.css'



const Cards = props => {

    const arrangeCards = () => {
        console.log(props.state.banker)
        //initializing. data hasn't been fetched yet.
        if(props.state.banker.length === 1){
            return(
                <div>Loading Data</div>
            )
        }
        //if both sides hit
        else if(props.state.banker.length === 3 && props.state.player.length === 3){
            return(
                <div className='cards parent'>
                    <img className='single-card third' src={props.state.banker[2].src} alt=''/> 
                    <img className='single-card' src={props.state.banker[0].src} alt=''/>     
                    <img className='single-card' src={props.state.banker[1].src} alt=''/>     
                    <div className='single-card vertical-horizontal-parent placeholder'>
                        <h1 className='vertical-horizontal-child'>VS</h1>
                    </div>
                    <img className='single-card' src={props.state.player[0].src} alt=''/>    
                    <img className='single-card' src={props.state.player[1].src} alt=''/>  
                    <img className='single-card third' src={props.state.player[2].src} alt=''/>    
                </div>
            ) 
        }
        //only if banker hit
        else if(props.state.banker.length === 3){
            return(
                <div className='cards parent'>
                    <img className='single-card third' src={props.state.banker[2].src} alt=''/>
                    <img className='single-card' src={props.state.banker[0].src} alt=''/>     
                    <img className='single-card' src={props.state.banker[1].src} alt=''/>     
                    <div className='single-card vertical-horizontal-parent placeholder'>
                        <h1 className='vertical-horizontal-child'>VS</h1>
                    </div>  
                    <img className='single-card' src={props.state.player[0].src} alt=''/>    
                    <img className='single-card' src={props.state.player[1].src} alt=''/>    
                </div>
            ) 
        }
        //just 2 cards each side
        else {
            return(
                <div className='cards'>
                    {props.state.banker.map((card, i) => {
                        return(
                            // ternary checks for new deck
                            <img className='single-card' src={card ? card.src : './images/Gray.jpg'} alt={i}/>    
                        )
                    })}
                    <div className='single-card vertical-horizontal-parent placeholder'>
                        <h1 className='vertical-horizontal-child'>VS</h1>
                    </div>
                    {props.state.player.map((card, i) => {
                        return(
                            <img className={props.state.player.length === 3 ? 'single-card third' : 'single-card'} src={card ? card.src : './images/Gray.jpg'} alt={i}/>    
                        )       
                    })}
                </div>
            )    
        }
    }


    return(
        <div className='parent'>
            {arrangeCards() }
        </div>
           
    )
}

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Cards);