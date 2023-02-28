import { FormControl, styled } from "@mui/material";
import { CheckboxWithLabel } from "formik-mui";
import { Colors } from "../theme";

export const PaymentFormControl = styled(FormControl)(({ theme }) => ({
          display: 'block',
          marginTop: theme.spacing(2),
}));


export const PaymentInfoAddressInfoCheckbox = styled(CheckboxWithLabel)(({ theme }) => ({
          color: Colors.secondary,
          backgroundColor: Colors.light_gray
}))
