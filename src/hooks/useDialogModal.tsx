import React, { useCallback, useMemo, useRef, useState } from "react";

export default function useDialogModal(Component: any) {

     const [open, setOpen] = useState(false);
     const openRef = useRef(open);
     openRef.current = open;

     const openDialog = useCallback(() => {
          setOpen(true);
     }, []);

     const closeDialog = useCallback(() => {
          setOpen(false);
     }, []);

     const DialogComponent: any = useMemo(() => {
          const WrappedDialogComponent = ({ ...props }: any) => {
               if (!Component) {
                    return null
               }

               return <Component open={openRef.current} onClose={closeDialog} {...props} />
          };

          return WrappedDialogComponent;
     }, [Component, closeDialog])

     return [DialogComponent, openDialog, closeDialog]
}
