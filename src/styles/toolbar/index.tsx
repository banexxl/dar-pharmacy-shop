import styled from "@emotion/styled"
import { Button, Container } from "@mui/material"
import Menu, { MenuProps } from '@mui/material/Menu';
import { Box } from "@mui/system"
import { Colors } from "../theme"


export const ToolbarContainer = styled(Box)(({ theme }: any) => ({
          position: 'relative',
          backgroundColor: Colors.secondary,
          [theme.breakpoints.up('md')]: {
                    height: '50px'
          }

}))

export const ToolbarItems = styled(Container)(({ theme }: any) => ({
          position: 'relative',
          display: 'flex',
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'space-between',
          [theme.breakpoints.up('md')]: {
                    height: '50px'
          }
}))

export const MenuButton = styled(Button)(({ theme }: any) => ({
          backgroundColor: Colors.secondary
}))


