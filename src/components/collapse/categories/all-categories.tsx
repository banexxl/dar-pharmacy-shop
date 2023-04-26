import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import React, { useState } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function AllCategories() {

          const [open, setOpen] = useState(true);

          const handleClick = () => {
                    setOpen(!open);
          };

          return (
                    <List
                              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader"
                              subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                                  Nested List Items
                                        </ListSubheader>
                              }
                    >


                              <ListItemButton onClick={handleClick}>
                                        <ListItemIcon>
                                                  <InboxIcon />
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
          );
}