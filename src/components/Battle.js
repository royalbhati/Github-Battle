import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function PlayerPreview(props){
    return(
        <div className="conatiner mt-5">
            <img
            className="avatar"
            src={props.avatar}
            alt={"alt"}

            ></img>
            <h2>
                @{props.username}
            </h2>
            <button className="btn ml-5" onClick={props.onReset.bind(null,props.id)}>
                reset
            </button>
        </div>
    )
}


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
                // <div className="container">
                <form className="column mt-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label header ml-5" htmlFor="username">
                    {this.props.label}
                    </label>

                    <input
                    className="form-control"
                    id="username"
                    placeholder="github username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}

                    >
                    </input>
                    <button
                    className="btn btn-secondary mt-2 ml-5"
                    type="submit"
                    disabled={!this.state.username}
                    >
                    Submit
                    </button>
                    </div>

                </form>
                // </div>
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

        this.handleSubmitt=this.handleSubmitt.bind(this);
        this.handleReset=this.handleReset.bind(this);
    }

    handleSubmitt(id,username){
        this.setState(()=>{
            const newstate={};

            newstate[id+"Name"]=username;
            newstate[id+"Image"]="https://github.com/"+username+'.png?size=200';
            return newstate;
        }

        )
    }
    handleReset(id){
        this.setState(()=>{
            const newstate={};

            newstate[id+"Name"]="";
            newstate[id+"Image"]=null;
            return newstate;
        })

    }


    render(){

        const playerOneName =this.state.playerOneName;
        const playerTwoName =this.state.playerTwoName;
        const playerOneImage=this.state.playerOneImage;
        const playerTwoImage=this.state.playerTwoImage;
        return(
            <div className="row">
                {!playerOneName && <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmitt}></PlayerInput>}

                {playerOneImage?<PlayerPreview avatar={playerOneImage} username={playerOneName} onReset={this.handleReset} id="playerOne"></PlayerPreview>:null}
                {playerTwoImage?<PlayerPreview avatar={playerTwoImage} username={playerTwoName} onReset={this.handleReset} id="playerTwo"></PlayerPreview>:null}
                {!playerTwoName && <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmitt}></PlayerInput>}
                {playerOneImage && playerTwoImage && <Link className="btn" >Battle</Link>}
            </div>
        )
    }
}
