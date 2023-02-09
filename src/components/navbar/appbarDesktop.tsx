import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import Link from "next/link";

export default function AppbarDesktop({ isScreenToMedium }: any) {

          const { setShowSearchBox } = useUIContext()

          return (
                    <AppbarContainer>
                              <AppbarHeader variant="h4">
                                        <Link href="/">
                                                  Apoteka Dar
                                        </Link>
                              </AppbarHeader>
                              <MyList type="row">
                                        <ListItemButton sx={{ maxWidth: '200px', mr: '100px' }} onClick={() => setShowSearchBox(true)}>
                                                  <ListItemIcon>
                                                            <SearchIcon />
                                                  </ListItemIcon>
                                        </ListItemButton>
                              </MyList>
                              <Actions isScreenToMedium={isScreenToMedium} />
                    </AppbarContainer>
          );
}
