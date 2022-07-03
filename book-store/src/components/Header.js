import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Header = () => {
  const [value, setvalue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor: ""}} position="sticky">
        <Toolbar>
          <Typography>
            <MenuBookIcon />
          </Typography>
          <Tabs
            sx={{ml: "auto"}}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onchange={(e, val) => setvalue(val)}
          >
            <Tab label="Add Product" />
            <Tab label="Books" />
            <Tab label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
