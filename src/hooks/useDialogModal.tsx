import React, { ReactElement, useCallback, useState } from "react";

export default function useDialogModal(Component: any) {

          const [open, setOpen] = useState(false);

          const openDialog = useCallback(() => {
                    setOpen(true);
          }, []);

          const closeDialog = useCallback(() => {
                    setOpen(true);
          }, []);

          interface DialogProps {
                    product: any
          }


          const DialogComponent: any = useCallback(({ ...props }) => {


                    if (!open) {
                              return null
                    } else {
                              if (Component) {

                                        return <Component open={open} onClose={() => setOpen(false)} {...props} />

                              } else {
                                        return null
                              }
                    }
                    return null
          },
                    [open, Component]
          )

          return [DialogComponent, openDialog, closeDialog]
}
