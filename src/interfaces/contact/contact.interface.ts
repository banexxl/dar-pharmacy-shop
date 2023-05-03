export interface IContactForm {
          name: string;
          email: string,
          message: string
}

export const initialContactFormValues: IContactForm = {
          name: '',
          email: '',
          message: ''

};
