import { createContext, useContext, useState } from "react";


export const CheckoutContext = createContext<any>({});
export const useCheckoutContext = () => useContext(CheckoutContext)


export const CheckoutProvider = ({ children }: any) => {

          const [indexValue, setIndexValue] = useState(0);


          const value = {
                    indexValue, setIndexValue,
          };

          return (
                    <CheckoutContext.Provider value={value}>
                              {children}
                    </CheckoutContext.Provider>
          )
}