import { Box, Typography } from "@mui/material";
import React from "react";

interface TabPanelProps {
     children?: React.ReactNode;
     index: number;
     value: number;
}

export const TabPanel = (props: TabPanelProps) => {

     const { children, value, index, ...other } = props;


     return (
          <Box
               role="tabpanel"
               hidden={value !== index}
               id={`simple-tabpanel-${index}`}
               aria-labelledby={`simple-tab-${index}`}
               {...other}
          >
               {value === index && (
                    <Box sx={{ p: 2 }}>
                         <Typography variant="body1">{children}</Typography>
                    </Box>
               )}
          </Box>
     );
}
