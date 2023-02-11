import { Button, Collapse, List, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { MenuButton, ToolbarContainer, ToolbarItems } from "../../styles/toolbar"
import ListItemButton from '@mui/material/ListItemButton';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import ToolbarMenu from './toolbarmenu';

function Toolbar() {


          const [open, setOpen] = useState(true);

          const handleClick = () => {
                    setOpen(!open);
          };

          return (
                    <ToolbarContainer>
                              <ToolbarItems>
                                        <ToolbarMenu />
                              </ToolbarItems>
                    </ToolbarContainer>
          )
}

export default Toolbar