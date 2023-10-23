import { Margin, Widgets } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import mediaAdd from '../assits/mediaAd.png'
import textAdd from '../assits/textAd.png'
import React, { useState } from "react";
import Navbar from "../atom/Navbar";
import { useNavigate } from "react-router-dom";
export default function CreateAdds() {
    const [checkedItem, setCheckedItem] = useState(null);
    const navigate = useNavigate()
    const handleCheckboxChange = (event) => {
        console.log(event.target.value, 'asda')
        setCheckedItem(event.target.value);
    };

    function handleNext(){
        if(checkedItem === "textAdd"){
          navigate("/creattext")
        }
        else if (checkedItem === "mediaAdd"){
          navigate('/creatmedia')
        }
    }
    return (
        <div>
        <Navbar/>
        <Card style={{
            height: "33rem",
            width: "97%",
            margin:"1rem"

        }} >
            <div style={{ marginLeft:"1rem", fontSize:"1.3rem" }}>
                <p>Create Ads</p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem"
                }}
            >
                <Card
                    style={{
                        width: "17rem",
                        height: "23rem",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"

                    }}
                >
                    <div style={{ padding: "0.5rem" }} >
                        <input
                            type="checkbox"
                            value={"textAdd"}
                            checked={checkedItem === "textAdd"}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <div>
                        <img src={textAdd} />

                    </div>
                </Card>
                <Card
                    style={{
                        width: "17rem",
                        height: "23rem",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }}
                >
                    <div style={{ padding: "0.5rem" }} >
                        <input
                            type="checkbox"
                            value={"mediaAdd"}
                            checked={checkedItem === "mediaAdd"}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <div>
                        <img src={mediaAdd} />

                    </div>
                </Card>
            </div>
            <div style={{ display:"flex", justifyContent:"flex-end",marginTop:"2rem",marginRight:"2rem" }} >

            <Button onClick={handleNext}  variant="contained">Next</Button>
            </div>
        </Card>
        </div>
    )
}