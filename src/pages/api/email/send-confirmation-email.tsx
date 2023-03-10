import EmailConfirmPurchase from '@/components/email/confirmed-purchase';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { transporter } from '../../../services/email/email-config'


const generateEmailContent = (data: IEmailToFields) => {

          return (
                    <EmailConfirmPurchase email={data.email} subject={data.subject} />
          )
};

const ConfirmationEmailHandler = async (req: any, res: any) => {

          if (req.method === "POST") {

                    const data: IEmailToFields = req.body;

                    if (!data || !data.name || !data.email || !data.subject || !data.message) {
                              return res.status(400).send({ message: "Bad request, data missing" });
                    }

                    try {
                              await transporter.sendMail({
                                        from: process.env.EMAIL_SERVER_USER,
                                        to: data.email,
                                        ...generateEmailContent(data),
                                        subject: data.subject,
                              });

                              return res.status(200).json({ success: true });

                    } catch (err: any) {
                              console.log("error je: ", err);
                              return res.status(400).json({ message: err });
                    }

          }
};
export default ConfirmationEmailHandler;