import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const CheckoutStepper: FunctionComponent = () => {

          const { t } = useTranslation();
          const [activeStep, setActiveStep] = useState<number>(0);



          return (
                    <Stepper alternativeLabel activeStep={activeStep}>
                              <Step key={1}>
                                        <StepLabel>{t('checkout.delivery')}</StepLabel>
                              </Step>
                              <Step key={2}>
                                        <StepLabel>{t('checkout.payment')}</StepLabel>
                              </Step>
                              <Step key={3}>
                                        <StepLabel>{t('checkout.confirmation')}</StepLabel>
                              </Step>
                    </Stepper>
          );
};
