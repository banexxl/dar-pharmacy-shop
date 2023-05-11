import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserFormValues } from '@/interfaces/checkout/user-form-values.interface';

export const userInfoFormSlice = createSlice({
          name: 'userInfoForm',
          initialState: initialUserFormValues,
          reducers: {
                    submitUserForm(state, { payload }: PayloadAction) {
                              console.log('payload', payload);

                    },
                    clearUserForm(state) {
                              console.log('usao u clear user form uncheckoutsliceu');

                              //state.userForm = initialCheckoutState.userForm;
                    },
          },
});

export const { submitUserForm, clearUserForm } = userInfoFormSlice.actions
const userInfoFormSliceReducer = userInfoFormSlice.reducer

export default userInfoFormSliceReducer