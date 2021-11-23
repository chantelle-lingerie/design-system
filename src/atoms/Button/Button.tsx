import React from "react";

import type { IButton } from "./Button.types";
import { EButtonKind } from "./Button.types";
import { Button as ButtonTag } from "./Button.styles";

export const Button: React.FC<IButton> = ({
  label,
  isloading,
  kind = EButtonKind.PRIMARY,
  backgroundColor,
  color,
  ...props
}: IButton): JSX.Element => {
  return (
    <ButtonTag {...props} kind={kind}>
      {isloading && "loader..."}

      {!isloading && <>{label}</>}
    </ButtonTag>
  );
};
