import { MouseEventHandler } from "react";

export interface ButtonCTAWithIconProps {
  text: string;
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
