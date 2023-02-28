import styled from "@emotion/styled";
import { Button, Checkbox, IconButton } from "@mui/material";
import { Colors } from "../theme";

export const CheckoutNextPrevButton = styled(Button)(() => ({
          background: Colors.secondary,
          margin: 4,
}))

export const ClearFormButton = styled(Button)(() => ({
          background: Colors.secondary,
          margin: 4,
}))

export const ShouldCreateAccountCheckBox = styled(Checkbox)(() => ({
          color: Colors.primary,
          backgroundColor: Colors.light_gray
}))