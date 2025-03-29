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
          <div
               role="tabpanel"
               style={{
                    display: value === index ? 'block' : 'block',
                    visibility: value === index ? 'visible' : 'hidden',
                    height: value === index ? 'auto' : 0,
                    overflow: 'hidden',
               }}
               {...other}
          >
               {children}
          </div>
     );
}
