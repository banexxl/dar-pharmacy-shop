import { useEffect, useState } from 'react'

export default function UseLocalStorage(key: string, initValue: any) {
          console.log('initValue', initValue);

          const [state, setState] = useState(() => {
                    const value: any = localStorage.getItem(key);
                    if (value !== null || value !== undefined || value !== "") {
                              return JSON.parse(value);
                    }

                    localStorage.setItem(key, JSON.stringify(initValue));
                    window.dispatchEvent(new Event("storage"));
                    return initValue;
          });

          useEffect(() => {
                    localStorage.setItem(key, state);
                    window.dispatchEvent(new Event("storage"));
          }, [key, state]);

          useEffect(() => {
                    const listenStorageChange = () => {
                              setState(() => {
                                        const value = localStorage.getItem(key);
                                        if (value !== null) {
                                                  return JSON.parse(value);
                                        }

                                        localStorage.setItem(key, JSON.stringify(initValue));
                                        window.dispatchEvent(new Event("storage"));
                                        return initValue;
                              });
                    };
                    window.addEventListener("storage", listenStorageChange);
                    return () => window.removeEventListener("storage", listenStorageChange);
          }, []);

          return [state, setState];
}