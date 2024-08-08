export interface IContactForm {
     name: string;
     email: string,
     message: string,
     dataProcessConsent: boolean,
     questionSubmissionConsent: boolean
     token: string
}

export const initialContactFormValues: IContactForm = {
     name: '',
     email: '',
     message: '',
     dataProcessConsent: false,
     questionSubmissionConsent: false,
     token: ''
};
