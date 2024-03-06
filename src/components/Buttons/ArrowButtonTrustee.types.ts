import { MouseEventHandler, ReactNode } from "react";

export interface ArrowButtonTrusteeProps {
  id: string;
  ariaLabel: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
