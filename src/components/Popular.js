import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as api  from '../utils/api';

function SelectLang(props){
    const languages = ["All","Javascript", "Python", "Ruby", "Java"];
    console.log(props)
    return (
        <ul className="languages">
            {languages.map((elem) => {
                return (

                    <li key={elem}
                    style={elem===props.selectlang ? {color:'#d0021b'}:null}
                    onClick={props.onSelect.bind(null,elem)}
                    >
                        {elem}
                    </li>
                )
            })}

        </ul>
    )
}

SelectLang.propTypes={
    selectlang:PropTypes.string.isRequired,
    onSelect:PropTypes.func.isRequired
}




export class Popular extends Component {
    constructor(){
        super();
        this.state={
            selectedlang:"All"
        }
        this.updatedlang=this.updatedlang.bind(this);
    }

    updatedlang(lang){
        this.setState(function(){
            return {selectedlang:lang}
        });
    }


    render() {

        return (
            <div>
                <p>Seleted : {this.state.selectedlang}</p>
                <SelectLang selectlang={this.state.selectedlang} onSelect={this.updatedlang}></SelectLang>
            </div>
        )
    }
}

export default Popular
