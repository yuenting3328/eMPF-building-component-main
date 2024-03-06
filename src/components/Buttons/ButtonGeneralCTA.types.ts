import { MouseEventHandler } from "react";

export interface ButtonGeneralCTAProps {
  text: string;
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
