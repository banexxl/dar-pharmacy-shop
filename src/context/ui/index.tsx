import { createContext, useContext, useState } from "react";


export const UIContext = createContext<any>({});
export const useUIContext = () => useContext(UIContext)


export const UIProvider = ({ children }: any) => {

          const [drawerOpen, setDrawerOpen] = useState(false);
          const [showSearchBox, setShowSearchBox] = useState(false);

          const value = {
                    drawerOpen,
                    setDrawerOpen,
                    showSearchBox,
                    setShowSearchBox
          };

          return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}