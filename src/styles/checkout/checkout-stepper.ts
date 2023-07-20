import { Step, StepLabel, Stepper, styled } from "@mui/material";
import { Colors } from "../theme";

export const CheckoutStepper = styled(Stepper)(({ theme }) => ({
          display: 'flex',
          flexWrap: 'wrap',
}));

export const CheckoutStep = styled(Step)(({ theme }) => ({

}));

export const CheckoutStepLabel = styled(StepLabel)(({ theme }) => ({
          color: "white"
}));