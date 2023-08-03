import { SetStateAction, createContext, useContext, useState, Dispatch } from 'react';

type LoadingContextType = {
          loading: boolean;
          setLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType>({
          loading: false,
          setLoading: () => { },
});

export function LoadingProvider({ children }: any) {
          const [loading, setLoading] = useState(false);

          return (
                    <LoadingContext.Provider value={{ loading, setLoading }}>
                              {children}
                    </LoadingContext.Provider>
          );
}

export function useLoading() {
          return useContext(LoadingContext);
}
