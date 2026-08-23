'use client';

import { createContext, useContext, useState } from "react";

export const UIContext = createContext<any>({});
export const useUIContext = () => useContext(UIContext);

/**
 * Lightweight UI state provider — context only, no layout rendering.
 * Manages drawer, search box, and loading wheel visibility state.
 */
export const UIStateProvider = ({ children }: { children: React.ReactNode }) => {
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
               {children}
          </UIContext.Provider>
     );
};

// Keep legacy export name for backward compatibility during transition
export const UIProvider = UIStateProvider;
