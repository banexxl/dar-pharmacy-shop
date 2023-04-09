import { TFunction } from 'i18next';
import { string, object } from 'yup';

export const creditCardSchema = (t: any) =>
          object().shape({
                    cardNumber: string()
                              .required(t('errorMessages.required', { fieldName: t('credit-card.card-number') }))
                              .matches(/^\d{16}$/, t('errorMessages.card-number', { fieldName: t('credit-card.card-number') }))
                              .test('luhn-algorithm', 'Invalid card number', (value: any) => {
                                        let sum = 0;
                                        for (let i = 0; i < value.length; i++) {
                                                  let cardDigit = parseInt(value[i], 10);
                                                  if ((i + value.length) % 2 === 0) {
                                                            cardDigit *= 2;
                                                            if (cardDigit > 9) {
                                                                      cardDigit -= 9;
                                                            }
                                                  }
                                                  sum += cardDigit;
                                        }
                                        return sum % 10 === 0;
                              }),
                    expirationDate: string()
                              .required(t('errorMessages.required', { fieldName: t('credit-card.expiry-date') }))
                              .matches(/^\d{2}\/\d{2}$/, t('errorMessages.date-format', { fieldName: t('credit-card.expiry-date') }))
                              .test('expiration-date', t('errorMessages.expired-card', { fieldName: t('credit-card.expiry-date') }), (value) => {
                                        const currentDate = new Date();
                                        const currentMonth = currentDate.getMonth() + 1;
                                        const currentYear = currentDate
                                                  .getFullYear()
                                                  .toString()
                                                  .substr(-2);
                                        const [month, year] = value.split('/');
                                        return (
                                                  parseInt(year, 10) > parseInt(currentYear, 10) ||
                                                  (parseInt(year, 10) === parseInt(currentYear, 10) &&
                                                            parseInt(month, 10) >= currentMonth)
                                        );
                              }),
                    securityCode: string()
                              .required(t('errorMessages.cvc-required', { fieldName: t('credit-card.security-code') }))
                              .matches(/^\d{3}$/, t('errorMessages.cvc-number', { fieldName: t('credit-card.security-code') })),
          });


