import { IEmailToFields } from "@/interfaces/email/email-to-fields.interface";

export const sendForm = async (data: IEmailToFields) => {

          console.log('service/email -> send form data', data);

          fetch("/api/email/send-confirmation-email", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    },
          }).then((res) => {
                    console.log(res);

                    if (!res.ok) throw new Error("Failed to send messageeee");
                    return res.json();
          });
}


