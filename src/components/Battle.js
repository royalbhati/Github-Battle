import React, { Component } from 'react'

import PropTypes from 'prop-types';


class PlayerInput extends Component{
        constructor(props){
         super()
         this.state={
            username:''
         }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        }
        handleChange(event){
            const value=event.target.value;

            this.setState(()=>{
                return{
                    username:value
                }
            })
        }
        handleSubmit(event){
            event.preventDefault();
            this.props.onSubmit(
                this.props.id,
                this.state.username,
            )
        }

        render(){
            return(
                <form className="column" onSubmit={this.handleSubmit}>
                    <label className="header" htmlFor="username">
                    {this.props.label}
                    </label>
                    <input
                    id="username"
                    placeholder="github username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}

                    >
                    </input>
                    <button
                    type="submit"
                    disabled={!this.state.username}
                    >
                    Submit
                    </button>

                </form>
            )
        }


}

PlayerInput.propTypes={
    id:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onSubmit:PropTypes.func.isRequired
}

export default class Battle extends Component {
    constructor(){
        super()
        this.state={
            playerOneName:"",
            playerTwoName:"",
            playerOneImage:null,
            playerTwoImage:null
        }

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(id,username){
        this.setState(()=>{
            const newstate={};

            newstate[id+"Name"]=username;
            newstate[id+"Image"]="https://github.com/"+username+'.png?size=200';
            return newstate;
        }

        )
    }
    handleReset(){
        this.setState(()=>{
            const newstate={};

            newstate[id+"Name"]="";
            newstate[id+"Image"]=null;
            return newstate;
        }

    }


    render(){

        const playerOneName =this.state.playerOneName;
        const playerTwoName =this.state.playerTwoName;
        const playerOneImage=this.state.playerOneImage;
        const playerTwoImage=this.state.playerTwoImage;
        return(
            <div className="row">
                {!playerOneName && <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit}></PlayerInput>}

                {playerOneImage?<PlayerPreview avatar={playerOneImage} username={playerOneName} onReset={this.handleReset} id="playerOne"></PlayerPreview>:null}
                {playerTwoImage?<PlayerPreview avatar={playerTwoImage} username={playerTwoName} onReset={this.handleReset} id="playerTwo"></PlayerPreview>:null}
                {!playerTwoName && <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmit}></PlayerInput>}
            </div>
        )
    }
}
