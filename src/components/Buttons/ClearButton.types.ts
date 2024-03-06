import { MouseEventHandler } from "react";

export interface ClearButtonProps {
  text: string;
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
