import { MouseEventHandler } from "react";

export interface SearchButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  id: string;
}
