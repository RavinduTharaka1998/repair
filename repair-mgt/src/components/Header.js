import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import{ NavLink } from 'react-router-dom';
const Header = () => {
    const [value,setValue] = useState();
    return (
        <div>
        <AppBar sx={{backGroundColor: "#232F3D"}} position= "sticky">
        <Toolbar>
       
                  <Typography>
                     <ConstructionIcon/><br></br>
                     Repair Management
                  </Typography>
        </Toolbar>
        </AppBar> 
        <Tabs
        textColor="inherit"
        indicatorColor='secondary'
        value={value}
        onChange={(e, val) => setValue(val)}
        >
        
         
                <Tab LinkComponent={NavLink} to ="/view"label="View Repairs" />
                <Tab LinkComponent={NavLink} to ="/add"label="Add Repairs" />
                <Tab LinkComponent={NavLink} to ="/return"label="Return Items" />
               <Tab LinkComponent={NavLink} to ="/status"label="Repair Status" />
               <Tab LinkComponent={NavLink} to ="/report"label="Repair Report" />
            
                </Tabs>
             </div>
    );
};
export default Header;