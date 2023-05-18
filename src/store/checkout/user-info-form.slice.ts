import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserFormValues } from '@/interfaces/checkout/user-form-values.interface';

export const userInfoFormSlice = createSlice({
          name: 'userInfoForm',
          initialState: initialUserFormValues,
          reducers: {
                    submitUserForm(state: any, action: PayloadAction) {
                              return action.payload
                    },
                    clearUserForm() {
                              return initialUserFormValues
                    },
          },
});

export const { submitUserForm, clearUserForm } = userInfoFormSlice.actions
const userInfoFormSliceReducer = userInfoFormSlice.reducer

export default userInfoFormSliceReducer