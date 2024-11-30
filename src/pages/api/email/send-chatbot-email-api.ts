import { transporter } from '@/services/email/email-config';
import { NextApiRequest, NextApiResponse } from 'next';

const SendChatBotMessage = async (request: NextApiRequest, response: NextApiResponse) => {

     if (request.method === 'POST') {
          const mailOptions = {
               from: process.env.EMAIL_SERVER_USER,
               to: 'maja@apoteka-dar.rs',
               subject: 'Poruka sa sajta!',
               html: `
        <p><strong>Poruka korisnika:</strong></p>
        <p>${request.body.question}</p>
        <p><strong>Kontakt korisnika:</strong></p>
        <p>${request.body.contact}</p>
    `
          }
          try {
               const emailSentResponse: any = await transporter.sendMail(mailOptions);

               if (emailSentResponse!.accepted.length > 0) {
                    return response.status(200).json({ message: 'Message sent successfully!' });
               } else {
                    return response.status(400).json({ error: 'Parameter is missing', message: `Question: ${request.body.question} or Contact: ${request.body.contact} is missing!` });
               }
          } catch (error) {
               return response.status(500).json({ error: 'Internal server error!' });
          }
     } else {
          return response.status(405).json({ error: 'Method not allowed!' });
     }
};

export default SendChatBotMessage;
