import { initialPaymentFormValues, IPaymentInfoForm } from '@/interfaces/checkout/payment-info-form-values.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const paymentInfoFormSlice = createSlice({
          name: 'paymentInfoForm',
          initialState: initialPaymentFormValues,
          reducers: {
                    submitPaymentInfoForm(state, action: PayloadAction<IPaymentInfoForm>) {
                              //state.paymentInfoForm = action.payload;
                    },
                    clearPaymentInfoForm(state) {
                              // state.paymentInfoForm = initialCheckoutState.paymentInfoForm;
                    },
          },
});

export const { clearPaymentInfoForm, submitPaymentInfoForm } = paymentInfoFormSlice.actions
const paymentInfoFormSliceReducer = paymentInfoFormSlice.reducer

export default paymentInfoFormSliceReducer