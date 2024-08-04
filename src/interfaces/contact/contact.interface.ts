export interface IContactForm {
     name: string;
     email: string,
     message: string,
     dataProcessConsent: boolean,
     questionSubmissionConsent: boolean
}

export const initialContactFormValues: IContactForm = {
     name: '',
     email: '',
     message: '',
     dataProcessConsent: false,
     questionSubmissionConsent: false
};
