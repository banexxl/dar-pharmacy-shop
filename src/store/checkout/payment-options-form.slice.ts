
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialPaymentOptionsValues, IPaymentOptionsForm } from '@/interfaces/checkout/payment-options-form-values.interface';

export const paymentOptionsFormSlice = createSlice({
          name: 'checkout',
          initialState: initialPaymentOptionsValues,
          reducers: {
                    submitPaymentOptionsForm(state, action: PayloadAction<IPaymentOptionsForm>) {
                              //state.paymentOptionsForm = action.payload;
                    },
                    clearPaymentOptionsForm(state) {
                              // state.paymentOptionsForm = initialCheckoutState.paymentOptionsForm;
                    },
          },
});

export const { clearPaymentOptionsForm, submitPaymentOptionsForm } = paymentOptionsFormSlice.actions
const paymentOptionsFormSliceReducer = paymentOptionsFormSlice.reducer

export default paymentOptionsFormSliceReducer