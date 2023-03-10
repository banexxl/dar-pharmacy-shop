import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { EmailBold, EmailContainer, EmailContent, EmailTitle } from '../../styles/email/emails'

function EmailConfirmPurchase(props: IEmailToFields) {

          const { email, subject, name, message, title } = props

          return (
                    <EmailContainer>
                              <EmailTitle variant="h5">{title}</EmailTitle>
                              <EmailBold>Dear {name}</EmailBold>
                              <EmailContent>{message}</EmailContent>
                    </EmailContainer>
          );
}

export default EmailConfirmPurchase
