import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Button } from '@mui/material';
import AddchartIcon from '@mui/icons-material/Addchart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const columns = [


    {
        field: 'Group',
        headerName: 'Group',
        width: 120,
        disableColumnMenu: true,
        
    },
    {
        field: 'Clicks',
        headerName: 'Clicks',
        disableColumnMenu: true,
        width: 110,
         
    },
    {
        field: 'Cost',
        headerName: 'Cost',
        disableColumnMenu: true,
        width: 110,
         
    },
    {
        field: 'Conversions',
        headerName: 'Conversions',
        
        disableColumnMenu: true,
        width: 110,
         
    },
    {
        field: 'Revenue',
        headerName: 'Revenue',
        width: 110,
        disableColumnMenu: true,
    },

];

const rows = [
    {
        id: 1,
        Group: 'Male',
        Clicks: 348,
        Cost:"USD 12,528",
        Conversions:43,
        Revenue:"USD 62,118"

    },
    {
        id: 2,
        Group: 'female',
        Clicks: 692,
        Cost:"USD 24,528",
        Conversions:35,
        Revenue:"USD 5,118"
    },
    {
        id: 3,
        Group: 'Unknown',
        Clicks: 205,
        Cost:"USD 3,528",
        Conversions:43,
        Revenue:"USD 4,118"
    },
    {
        id: 4,
        Group: 'Total',
        Clicks: 1145,
        Cost:"USD 41,528",
        Conversions:80,
        Revenue:"USD 71,118"
    },

];
export default function PieChart1() {

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        console.log(newAlignment);
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
    return (
        <div style={{
            width: "50%",
            margin: "1rem",

            border: "0.1rem solid rgb(224,224,224)",

            borderRadius: "0.2rem"

        }} >
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                border: "0.1rem solid rgb(224,224,224)",
                paddingRight: "1rem",
                paddingLeft: "1rem"
            }} >
                <p style={{ fontSize: "1.2rem" }} >Ad Insights</p>
                <div style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between",
                    alignItems: "center"
                }} >
                    <select>
                        <option>Clicks</option>
                    </select>
                    <HelpOutlineIcon />
                </div>
            </div>
            <div style={{
                height: "20rem"
            }} >
                {alignment === "left" ?
                    <div style={{ paddingTop: "2rem", }}>
                        <div style={{ padding: '20px' }}>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 40, label: ' 40% male', color: "orange" },
                                            { id: 1, value: 35, label: ' 35% female', color: "blue" },
                                            { id: 2, value: 25, label: ' 25% unknown', color: "black" },
                                        ],
                                        innerRadius: 60,
                                    },
                                ]}

                                width={400}
                                height={200}
                            />
                        </div>
                    </div> :
                    <Box sx={{ width: '100%', }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}

                            disableRowSelectionOnClick
                        />
                    </Box>
                }

            </div>
            <div style={{ borderRadius: "2rem", border: "0.2rem soild black", display: "flex", justifyContent: "flex-end", marginRight: "2rem", marginTop: "0.5rem" }}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton variant="contained" value="left" aria-label="left aligned">
                        <DonutLargeIcon color={alignment === "left" ? "primary" : ""} />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <AddchartIcon color={alignment === "right" ? "primary" : ""} />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    );
}