import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantacy" }} variant="h2">
          This Application Is A Book Store Crud Application
        </Typography>
      </Box>
    </div>
  );
};

export default About;
