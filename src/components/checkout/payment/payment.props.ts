import { checkoutSelectors } from '@/store/checkout/checkout.selectors';
import { checkoutSlice } from '@/store/checkout/checkout.slice';
import { IRootState } from '@/store/checkout/root-state.interface';
import { Dispatch } from '@reduxjs/toolkit';

import { IPaymentFormValues } from '../../../interfaces/checkout/payment-form-values.interface';

const mapStateToProps = (state: IRootState) => {
          return {
                    paymentForm: checkoutSelectors.getPaymentForm(state),
          };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
          return {
                    submitPaymentForm(formValues: IPaymentFormValues) {
                              dispatch(checkoutSlice.actions.submitPaymentForm(formValues));
                    },
                    clearPaymentForm() {
                              dispatch(checkoutSlice.actions.clearPaymentForm());
                    },
          };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type PaymentFormProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { PaymentFormProps };
