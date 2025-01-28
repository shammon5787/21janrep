import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:"space-between", padding:'20px', backgroundColor:'navy', position:'fixed', top:'0px', left:'0px', right:'0px'}}>
            <div style={{backgroundColor:'tranparent'}}>
                {new Date().toUTCString().slice(0, 16)}
            </div>
            <div>
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/slide' >Slide</Link>
            </div>
        </div>
    )
}

export default Navbar