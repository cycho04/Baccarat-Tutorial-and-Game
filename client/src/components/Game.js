import React from 'react';
import axios from 'axios';

class Game extends React.Component {

    componentDidMount(){
        //initially fetches all board data.
        //READ
        axios.get('http://localhost:5000/board')
            .then((res) => {
                console.log('GET REQUEST',res.data)
            })
    }


    handleCreate = () => {
        //CREATE
        axios.post('http://localhost:5000/board',{
            history: [0, 1]
        })
    }

    handleRead = () => {
        //SHOW
        axios.get('http://localhost:5000/board/5c7fbc2411bc3d0c20e43739')
            .then((res)=>{
                console.log("SHOW", res.data)
            })
    }

    handleUpdate = () => {
        axios.put('http://localhost:5000/board/5c7fbc2411bc3d0c20e43739', {
            history: [0,1,0]
        })
    }

    handleDestroy = () => {
        axios.delete('http://localhost:5000/board/5c7fbd6e11bc3d0c20e4373a');
    }


    render(){
        return (
            <div>
                <button className='ui button' onClick={this.handleCreate}>Create</button>
                <button className='ui button' onClick={this.handleRead}>Read</button>
                <button className='ui button' onClick={this.handleUpdate}>Update</button>
                <button className='ui button' onClick={this.handleDestroy}>Destroy</button>
            </div>
        );    
    }
};

export default Game;