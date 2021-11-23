import React from "react";

export enum EButtonKind {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  readonly backgroundColor?: string;
  readonly color?: string;
  readonly iconLeft?: string;
  readonly iconRight?: string;
  readonly isloading?: boolean;
  readonly kind?: EButtonKind;
  readonly label?: string;
}
