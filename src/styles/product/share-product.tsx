import styled from "@emotion/styled";
import { Colors } from "../theme";
import { Box, Button } from "@mui/material";
import { useCallback, useEffect } from "react";

export const PopupBody = styled(Box)(
  ({ theme }: any) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? Colors.dim_grey : Colors.dove_gray};
  background-color: ${theme.palette.mode === 'dark' ? Colors.light_gray : '#fff'};
  box-shadow: ${theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  z-index: 1;
`,
);

export const ShareButton = styled(Button)(
  ({ theme }: any) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${Colors.primary};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${Colors.secondary};
  box-shadow: 0 2px 1px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${Colors.secondary}, inset 0 -2px 1px ${Colors.secondary};

  &:hover {
    background-color: ${Colors.secondary};
  }

  &:active {
    background-color: ${Colors.primary};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? Colors.secondary : Colors.primary};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${Colors.secondary};
    }
  }
`,
);

function Animated(
  props: React.PropsWithChildren<{
    className?: string;
    requestOpen: boolean;
    onEnter: () => void;
    onExited: () => void;
  }>,
) {
  const { requestOpen, onEnter, onExited, children, className } = props;

  useEffect(() => {
    if (requestOpen) {
      onEnter();
    }
  }, [onEnter, requestOpen]);

  const handleAnimationEnd = useCallback(() => {
    if (!requestOpen) {
      onExited();
    }
  }, [onExited, requestOpen]);

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={className + (requestOpen ? ' open' : ' close')}
    >
      {children}
    </div>
  );
}

export const PopAnimation = styled(Animated)`
  @keyframes open-animation {
    0% {
      opacity: 0;
      transform: translateY(-8px) scale(0.95);
    }

    50% {
      opacity: 1;
      transform: translateY(4px) scale(1.05);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes close-animation {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    50% {
      opacity: 1;
      transform: translateY(4px) scale(1.05);
    }

    100% {
      opacity: 0;
      transform: translateY(-8px) scale(0.95);
    }
  }

  &.open {
    animation: open-animation 0.4s ease-in forwards;
  }

  &.close {
    animation: close-animation 0.4s ease-in forwards;
  }
`;
