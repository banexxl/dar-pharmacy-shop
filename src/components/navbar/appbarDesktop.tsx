import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import CartDialog from '../cart/index'

export default function AppbarDesktop({ isScreenToMedium }: any) {

          const { setShowSearchBox } = useUIContext()

          return (
                    <AppbarContainer>
                              <AppbarHeader variant="h4">Apoteka Dar</AppbarHeader>
                              <MyList type="row">
                                        <ListItemButton sx={{ maxWidth: '200px' }} onClick={() => setShowSearchBox(true)}>
                                                  <ListItemIcon>
                                                            <SearchIcon />
                                                  </ListItemIcon>
                                        </ListItemButton>
                              </MyList>
                              <Actions isScreenToMedium={isScreenToMedium} />
                    </AppbarContainer>
          );
}
