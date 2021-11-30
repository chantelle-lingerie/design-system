import React from 'react';

export interface IIcon extends React.HTMLProps<HTMLOrSVGElement> {
  readonly svgPath: string;
}

export const Icon: React.FC<IIcon> = ({
  svgPath,
  ...svgProps
}: IIcon): JSX.Element => {
  return (
    <svg
      {...svgProps}
      viewBox="0 0 24 24"
      width={svgProps.width || 24}
      height={svgProps.height || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={svgPath} />
    </svg>
  );
};
