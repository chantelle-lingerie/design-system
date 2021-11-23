import styled from "styled-components";

import { IButton } from "./Button.types";

export const Button = styled.button<IButton>`
  appearance: none;
  background: #000;
  color: #fff;
  border: none;
  height: 48px;
  padding: 0 15px;
`;
