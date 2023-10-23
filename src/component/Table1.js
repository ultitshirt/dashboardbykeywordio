import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [


  {
      field: 'Campaigns',
      headerName: 'Campaigns',
      
            disableColumnMenu: true,
      width: 120,
      
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
      width: 120,
     
            disableColumnMenu: true,
  },

];

const rows = [
  {
      id: 1,
      Campaigns: 'Cosmetics',
      Clicks: 748,
      Cost:"USD 2,528",
      Conversions:8,
      Revenue:"USD 16,118"

  },
  {
      id: 2,
      Campaigns: 'Serums',
      Clicks: 3961,
      Cost:"USD 27,528",
      Conversions:35,
      Revenue:"USD 362,118"
  },
  {
      id: 3,
      Campaigns: 'Facewash',
      Clicks: 9462,
      Cost:"USD 27,528",
      Conversions:43,
      Revenue:"USD 362,118"
  },
  {
      id: 4,
      Campaigns: 'Shampoos',
      Clicks: 439,
      Cost:"USD 3,528",
      Conversions:9,
      Revenue:"USD 11,118"
  },
  {
      id: 4,
      Campaigns: 'Total',
      Clicks: 2045,
      Cost:"USD 1,43,528",
      Conversions:80,
      Revenue:"USD 15,04,118"
  },

];

export default function Table1() {
  return (
    <div  style={{
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
     </div>
    <Box sx={{ height: 400, width: '100%',   }}>
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
    </div>
  );
}
