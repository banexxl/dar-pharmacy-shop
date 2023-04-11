import { Checkbox, FormControl, styled } from "@mui/material";
import { CheckboxWithLabel, RadioGroup } from "formik-mui";
import { Colors } from "../theme";

export const PaymentFormControl = styled(FormControl)(({ theme }) => ({
          display: 'block',
          marginTop: theme.spacing(2),
}));

export const PaymentInfoAddressInfoCheckbox = styled(CheckboxWithLabel)(({ theme }) => ({
          color: Colors.secondary,
          backgroundColor: Colors.light_gray
}))

export const isBillingAndShippingCheckbox = styled(CheckboxWithLabel)(() => ({
          color: Colors.secondary,
          backgroundColor: Colors.light_gray
}))

export const paymentOptions = styled(RadioGroup)(() => ({
          color: Colors.secondary,
          backgroundColor: Colors.light_gray,
}))
