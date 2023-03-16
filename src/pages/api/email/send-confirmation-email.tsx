import EmailConfirmPurchase from '@/components/email/confirmed-purchase';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import ReactDOMServer from "react-dom/server"
import { transporter } from '../../../services/email/email-config'

const ConfirmationEmailHandler = async (req: any, res: any) => {

          if (req.method === "POST") {

                    const data: IEmailToFields = req.body;
                    const html = `<html>
  <head>
    <meta charset="UTF-8">
    <title>Shopping Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        background-color: #f5f5f5;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 30px;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        font-size: 24px;
        margin: 0 0 20px;
        color: red;
      }
      p {
        margin: 0 0 10px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      li {
        margin: 0 0 5px;
      }
      .button {
        display: inline-block;
        background-color: #4caf50;
        color: #fff;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 3px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Thank You for Your Purchase!</h1>
      <p>Dear [Customer Name],</p>
      <p>We are pleased to confirm your recent purchase on [Date] from our online store. Your order details are as follows:</p>
      <ul>
        <li><strong>Order Number:</strong> [Order Number]</li>
        <li><strong>Items:</strong></li>
        <ul>
          <li>[Item 1]</li>
          <li>[Item 2]</li>
          <li>...</li>
        </ul>
        <li><strong>Shipping Address:</strong> [Shipping Address]</li>
        <li><strong>Payment Method:</strong> [Payment Method]</li>
        <li><strong>Total Cost:</strong> [Total Cost]</li>
      </ul>
      <p>If you have any questions or concerns regarding your order, please feel free to contact us at [Customer Service Email] or by phone at [Customer Service Phone Number].</p>
      <p>Thank you for choosing our store for your shopping needs!</p>
      <a href="[Store URL]" class="button">Shop More</a>
    </div>
  </body>
</html>`

                    if (!data || !data.name || !data.email || !data.subject || !data.message || !data.cart) {
                              return res.status(400).send({ message: "Bad request, data missing" });
                    }

                    try {
                              await transporter.sendMail({
                                        from: process.env.EMAIL_SERVER_USER,
                                        to: data.email,
                                        subject: data.subject,
                                        html: ReactDOMServer.renderToString(<EmailConfirmPurchase email={data.email} subject={data.subject} message={data.message} name={data.name} title={data.title} cart={data.cart} />)

                              });

                              return res.status(200).json({ success: true });

                    } catch (err: any) {
                              return res.status(400).json({ message: err });
                    }

          }
};
export default ConfirmationEmailHandler;