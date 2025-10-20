import React, { useState, forwardRef } from 'react';
import { Button as MuiButton, ButtonProps, CircularProgress } from '@mui/material';

type ClickMaybeAsync = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void | Promise<void>;

export interface LoadingButtonProps extends Omit<ButtonProps, 'onClick'> {
  onClick?: ClickMaybeAsync;
  loading?: boolean; // controlled loading state (optional)
  loadingText?: string; // optional text to show while loading
}

const Button = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    { onClick, loading: loadingProp, loadingText, disabled, startIcon, children, ...props },
    ref
  ) => {
    const [loadingLocal, setLoadingLocal] = useState(false);
    const loading = loadingProp ?? loadingLocal;

    const handleClick: ClickMaybeAsync = async (e) => {
      if (!onClick) return;

      try {
        const maybePromise = onClick(e);
        if (maybePromise && typeof (maybePromise as any).then === 'function') {
          setLoadingLocal(true);
          await maybePromise;
        }
      } finally {
        setLoadingLocal(false);
      }
    };

    return (
      <MuiButton
        ref={ref}
        onClick={handleClick}
        disabled={disabled || loading}
        aria-busy={loading ? true : undefined}
        startIcon={loading ? undefined : startIcon}
        {...props}
      >
        {loading ? <CircularProgress size={16} /> : children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
