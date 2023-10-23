import React from "react";
import style from '../global.module.css'
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    const navigate = useNavigate()
    return(
        <div className={style.mainbox} >
            <p className={style.leftside} >APP LOGO</p>
            <div className={style.rightside}  >
            <p style={{  fontSize:"1.2rem" , cursor:"pointer" }} onClick={()=>navigate('/')}  >DASHBOARD</p>
            <p  style={{  fontSize:"1.2rem",  cursor:"pointer" }}onClick={()=>navigate('/createads')}  >CREATE ADS</p>
            </div>
        </div>
    )
}