import { MouseEventHandler } from "react";

export interface FloatingIconButtonProps {
  id: string;
  ariaLabel: string;
  src: string;
  alt: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
