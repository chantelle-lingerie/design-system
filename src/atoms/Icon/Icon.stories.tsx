import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, IconPaths } from '.';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = props => <Icon {...props} />;

export const Default = () => {
  return Object.entries(IconPaths).map(
    ([iconKey, svgPath]: [string, string]) => (
      <li key={iconKey}>
        {iconKey}
        <Icon svgPath={svgPath} />
      </li>
    ),
  );
};

export const Coeur = Template.bind({});
Coeur.args = {
  svgPath: IconPaths.HEART,
};
