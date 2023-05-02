export interface IContactForm {
          firstName: string;
          email: string,
          contactMessage: string
}

export const initialContactFormValues: IContactForm = {
          firstName: '',
          email: '',
          contactMessage: ''

};
