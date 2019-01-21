import React, { Component } from 'react'
import PropTypes from 'prop-types';
import fetchPopular from '../utils/api';



function SelectLang(props) {
    const languages = ["All", "Javascript", "Python", "Ruby", "Java"];
    return (
        <ul className="languages">
            {languages.map((elem) => {
                return (

                    <li key={elem}
                        style={elem === props.selectlang ? { color: '#d0021b' } : null}
                        onClick={props.onSelect.bind(null, elem)}
                    >
                        {elem}
                    </li>
                )
            })}

        </ul>
    )
}



function RepoGrid(props){
    console.log(props)
    return(
        <ul className="repo">
        {props.repos.map((repo,index)=>{
            return(
                <li key={repo.name} className="item">
                <div className="rank">#{index+1}</div>
                <ul className='space-list'>
                <li>
                    <img className="avatar"
                    src={repo.owner.avatar_url}
                    alt={'Avatar for'+repo.owner.login}
                    >
                    </img>
                </li>
                <li> <a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>

                </ul>
                </li>

            )
        })}

        </ul>
    )
}

SelectLang.propTypes = {
    selectlang: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}




export class Popular extends Component {
    constructor() {
        super();
        this.state = {
            selectedlang: "All",
            repos:null
        }
        this.updatedlang = this.updatedlang.bind(this);
    }

    updatedlang(lang) {
        this.setState(function () {
            return { selectedlang: lang,
                     repos:null    }
        });

        fetchPopular(lang).then(function(repos){
            this.setState(function(){
                return{
                repos:repos
                }
            })

        }.bind(this))
    }

    componentDidMount(){
        this.updatedlang(this.state.selectedlang);

    }


    render() {
        console.log(this.state.repos);

        return (
            <div>
                <SelectLang selectlang={this.state.selectedlang} onSelect={this.updatedlang}></SelectLang>
               {!this.state.repos ?
               <h1>Loading....</h1> :
            <RepoGrid repos={this.state.repos}></RepoGrid>}
            </div>
        )
    }
}

export default Popular
