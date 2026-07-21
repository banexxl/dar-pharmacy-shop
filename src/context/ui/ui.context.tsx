import Animate from "@/components/animate/animate";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import { Box } from "@mui/material";
import { createContext, useContext, useState } from "react";


export const UIContext = createContext<any>({});
export const useUIContext = () => useContext(UIContext)


export const UIProvider = ({ children }: any) => {

     const [drawerOpen, setDrawerOpen] = useState(false);
     const [showSearchBox, setShowSearchBox] = useState(false);
     const [showLoadingWheel, setShowLoadingWheel] = useState('none');

     const value = {
          drawerOpen, setDrawerOpen,
          showSearchBox, setShowSearchBox,
          showLoadingWheel, setShowLoadingWheel
     };

     return (
          <UIContext.Provider value={value}>
               <NavBar />
               <Animate>
                    {children}
               </Animate>
               <Footer />
          </UIContext.Provider>
     )
}