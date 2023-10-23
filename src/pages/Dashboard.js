import React from "react";
import Navbar from "../atom/Navbar";
import Table1 from "../component/Table1";
import style from '../global.module.css'
import PieChart1 from "../component/PieChart";

export default function Dashboard(){
    return(
        <div>
            <Navbar/>
            <div style={{ display:'flex', }} >
                <Table1  />
                <PieChart1/>
            </div>
        </div>
    )
}