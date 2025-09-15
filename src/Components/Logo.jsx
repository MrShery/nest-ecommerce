import React from "react"
import Nestlogo from "../assets/Nestlogo.png"
import { Link } from "react-router";
const Logo=({className})=>{
    return <Link to="/"><img className={className} src={Nestlogo} alt="#logo" /></Link>
}
export default Logo;