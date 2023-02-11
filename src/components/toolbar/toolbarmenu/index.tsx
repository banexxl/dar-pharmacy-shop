import { MenuButton } from '@/styles/toolbar';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function ToolbarMenu() {

          const [open, setOpen] = React.useState(false);
          const anchorRef = React.useRef<HTMLButtonElement>(null);

          const handleToggle = () => {
                    setOpen((prevOpen) => !prevOpen);
          };

          const handleClose = (event: Event | React.SyntheticEvent) => {
                    if (
                              anchorRef.current &&
                              anchorRef.current.contains(event.target as HTMLElement)
                    ) {
                              return;
                    }

                    setOpen(false);
          };

          function handleListKeyDown(event: React.KeyboardEvent) {
                    if (event.key === 'Tab') {
                              event.preventDefault();
                              setOpen(false);
                    } else if (event.key === 'Escape') {
                              setOpen(false);
                    }
          }

          // return focus to the button when we transitioned from !open -> open
          const prevOpen = React.useRef(open);
          React.useEffect(() => {
                    if (prevOpen.current === true && open === false) {
                              anchorRef.current!.focus();
                    }

                    prevOpen.current = open;
          }, [open]);

          return (
                    <Container>

                              <MenuButton
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? 'composition-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                              >
                                        Sve Kategorije
                              </MenuButton>
                              <Popper
                                        open={open}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition
                                        disablePortal
                              >
                                        {({ TransitionProps, placement }) => (
                                                  <Grow
                                                            {...TransitionProps}
                                                            style={{
                                                                      transformOrigin:
                                                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                            }}
                                                  >
                                                            <Paper>
                                                                      <ClickAwayListener onClickAway={handleClose}>
                                                                                <MenuList
                                                                                          autoFocusItem={open}
                                                                                          id="composition-menu"
                                                                                          aria-labelledby="composition-button"
                                                                                          onKeyDown={handleListKeyDown}
                                                                                          sx={{ backgroundColor: "red" }}
                                                                                >
                                                                                          <MenuItem onClick={handleClose}>Kozmetika</MenuItem>
                                                                                          <MenuItem onClick={handleClose}>Kućna hemija</MenuItem>
                                                                                          <MenuItem onClick={handleClose}>Biljni preparati</MenuItem>
                                                                                          <MenuItem onClick={handleClose}>Lekovi</MenuItem>
                                                                                          <MenuItem onClick={handleClose}>Medicinska pomagala</MenuItem>
                                                                                </MenuList>
                                                                      </ClickAwayListener>
                                                            </Paper>
                                                  </Grow>
                                        )}
                              </Popper>
                              <MenuButton>
                                        Akcije
                              </MenuButton>
                    </Container>
          )
}

export default ToolbarMenu