import { TextFields } from '@mui/icons-material'
import { Card, Button } from '@mui/material'
import submitImg from '../assits/sbmit.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import Navbar from '../atom/Navbar';
export default function CreateMedia() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = () => {
        setShow(true)
        setTimeout(() => {
            navigate('/createads')
        }, 2000)
    }
    return (
        <div>
            {show ? <img style={{ width: "99vw", height: "96vh" }} src={submitImg} />
                :
                <div>

                <Navbar/>
                <Card style={{ paddingLeft: "2rem",marginTop:"2rem", boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}  >
                    <p style={{ fontSize: '1.2rem' }} >Create Text & Media</p>
                    <div style={{ display: "flex", gap: '2rem', width: "96%", height: "15rem" }} >


                        <div style={{ height: "15rem" }}  >
                            <p>Heading 01</p>
                            <TextField
                                style={{ width: "40rem" }}
                                id="outlined-multiline-flexible"
                                multiline
                                placeholder='Add a heading that would make users interested'
                                maxRows={4}
                            />
                            <p>Heading 02</p>
                            <TextField
                                id="outlined-multiline-flexible"
                                style={{ width: "40rem" }}
                                placeholder='Add a heading that would make users interested'
                                multiline
                                maxRows={4}
                            />

                        </div>
                        <div style={{ height: "15rem" }} >
                            <p>Description 01</p>
                            <TextField
                                id="outlined-multiline-static"
                                style={{ width: "35rem" }}
                                multiline
                                rows={5.5}
                               
                            />

                        </div>

                    </div>
                    <div style={{ display: "flex", width: "98%", justifyContent: "space-between" }} >
                        <div>
                            <p>Landscape Marketing Image (1:9:1)</p>
                            <TextField
                                id="outlined-multiline-flexible"
                                placeholder='Add the URL of image you want to use for the ad'
                                style={{ width: "25rem" }}
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <p>Portrait Marketing Image (4:5)</p>
                            <TextField
                                id="outlined-multiline-flexible"
                                placeholder='Add the URL of image you want to use for the ad'
                                style={{ width: "25rem" }}
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <p>Square Marketing Image (1:1)</p>
                            <TextField
                                id="outlined-multiline-flexible"
                                placeholder='Add the URL of image you want to use for the ad'
                                style={{ width: "25rem" }}
                                multiline
                                maxRows={4}
                            />
                        </div>

                    </div>
                    <div>
                        <p>Video URL</p>
                        <TextField
                            id="outlined-multiline-flexible"
                            placeholder='Add the URL of the video you want to use for the ad'
                            style={{ width: "77rem" }}
                            multiline
                            maxRows={4}
                        />
                    </div>
                    <div style={{ display: "flex", gap: '2rem', width: "96%" }} >
                        <div>
                            <p>Business Name</p>
                            <TextField
                                id="outlined-multiline-flexible"
                               
                                style={{ width: "40rem" }}
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <p>Button Label</p>
                            <FormControl style={{ width: "35rem" }}>

                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value="Select a label that that best suits your ad"

                                >
                                 <option> Select a label that that best suits your ad </option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <p>Website URL</p>
                        <TextField
                            id="outlined-multiline-flexible"
                            style={{ width: "77rem" }}
                            placeholder='Add the URL of the landing page you want to redirect users to'
                            multiline
                            maxRows={4}
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "2.2rem", gap: "1rem" }} >
                        <Button onClick={()=>navigate('/createads')} style={{ backgroundColor: "rgb(224,224,224)", color: "black", border: "0.1rem solid rgb(224,224,224)" }} >Cancel</Button>
                        <Button variant="contained" onClick={handleSubmit} >Submit</Button>
                    </div>

                </Card>
                </div>
            }
        </div>
    )
}