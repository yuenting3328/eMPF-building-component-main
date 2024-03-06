import { MouseEventHandler, ReactNode } from "react";

export interface ArrowButtonMPFAProps {
  id: string;
  ariaLabel: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
