import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui/ui.context";
import { useTranslation } from "next-i18next/dist/types";

export default function AppbarMobile({ isScreenToMedium }: any) {

          const { setDrawerOpen, setShowSearchBox } = useUIContext();

          const { t } = useTranslation('common')

          return (
                    <AppbarContainer>
                              <IconButton onClick={() => setDrawerOpen(true)}>
                                        <MenuIcon />
                              </IconButton>
                              <AppbarHeader textAlign={"center"} variant="h4">
                                        DAR
                              </AppbarHeader>
                              <IconButton onClick={() => setShowSearchBox(true)}>
                                        <SearchIcon />
                              </IconButton>
                              <Actions isScreenToMedium={isScreenToMedium} />
                    </AppbarContainer>
          );
}
