
export interface ISubscribeEmailForm {
          email: string,
          agreedToTerms: boolean
}

export const initialSubscribeEmailFormValues: ISubscribeEmailForm = {
          email: '',
          agreedToTerms: false
}