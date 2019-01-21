import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {

    return(
        <div>
            <h1>Battle:</h1>
            <p>Battle with your friends</p>

            <Link className="button" to="/battle" >Battle</Link>


        </div>


    )

}
