import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addSearch } from '../Store/SeachSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:"space-between", padding:'20px', backgroundColor:'GrayText', position:'fixed', top:'0px', left:'0px', right:'0px'}}>
            <div style={{backgroundColor:'transparent'}}>
                {new Date().toUTCString().slice(0, 16)}
            </div>
            <div style={{backgroundColor:'transparent', display:'flex', alignItems:'center', justifyContent:'space-around', gap:'40px', listStyle:'none',}}>
                <Link style={{backgroundColor:'transparent',  textDecoration:'none'}} to='/' >Home</Link>
                <Link style={{backgroundColor:'transparent',  textDecoration:'none'}} to='/about' >About</Link>
                <Link style={{backgroundColor:'transparent',  textDecoration:'none'}} to='/slide' >Slide</Link>
            </div>
            <input onChange={(e)=>dispatch(addSearch(e.target.value))} style={{backgroundColor:'white', color:'black', padding:'6px', border:'none', borderRadius:'2px', outline:'none'}} type="search" name="" placeholder='search here' id="" />
        </div>
    )
}

export default Navbar