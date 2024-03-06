import { MouseEventHandler } from "react";

export interface OutlineButtonSaveProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  id: string;
}
