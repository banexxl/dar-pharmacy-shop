import { Box } from '@mui/material'
import React, { createContext, useContext, useState } from 'react'

export const CheckoutContext = createContext<any>({});
export const useCheckoutContext = () => useContext(CheckoutContext)

interface CheckoutContextProviderProps {
          children: JSX.Element | JSX.Element[]
}

function CheckoutProvider({ children }: CheckoutContextProviderProps) {

          const [tabIndex, setTabIndex] = useState(0)

          const value = {
                    tabIndex, setTabIndex
          }

          return (
                    <CheckoutContext.Provider value={value}>
                              {children}
                    </CheckoutContext.Provider>
          )
}

export default CheckoutProvider