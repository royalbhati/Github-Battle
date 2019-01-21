import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Nav(props){
    return(
        <ul className='nav'>
        <li>
            <NavLink exact activeClassName='active'  to={"/"}>Home</NavLink>

        </li>
        <li>
            <NavLink exact activeClassName='active'  to={"/battle"}>Battle</NavLink>

        </li>
        <li>
            <NavLink exact activeClassName='active'  to={"/popular"}>Popular</NavLink>

        </li>
        </ul>
    )
}