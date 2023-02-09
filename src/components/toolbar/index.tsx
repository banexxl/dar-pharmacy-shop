import { Button, Collapse, List, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { MenuButton, ToolbarContainer, ToolbarItems } from "../../styles/toolbar"
import ListItemButton from '@mui/material/ListItemButton';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

function Toolbar() {


          const [open, setOpen] = useState(true);

          const handleClick = () => {
                    setOpen(!open);
          };

          return (
                    <ToolbarContainer>
                              <ToolbarItems>
                                        <List>
                                                  <ListItemButton onClick={handleClick}>
                                                            <ListItemIcon>
                                                                      <MedicalServicesIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Inbox" />
                                                            {open ? <ExpandLess /> : <ExpandMore />}
                                                  </ListItemButton>
                                                  <Collapse in={open} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding>
                                                                      <ListItemButton sx={{ pl: 4 }}>
                                                                                <ListItemIcon>
                                                                                          <StarBorder />
                                                                                </ListItemIcon>
                                                                                <ListItemText primary="Starred" />
                                                                      </ListItemButton>
                                                            </List>
                                                  </Collapse>
                                        </List>
                              </ToolbarItems>
                    </ToolbarContainer>
          )
}

export default Toolbar