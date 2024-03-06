import { MouseEventHandler, ReactNode } from "react";

export interface DashBoardButtonProps {
  id: string;
  text: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
