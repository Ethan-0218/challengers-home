import React, { FC } from 'react';
import { ICONS, IconNames } from './icons';

type Props = {
  name: IconNames;
  color?: string;
  size: number;
};

const Icon: FC<Props> = ({ name, size, color = '#111111' }) => {
  const Svg = ICONS[name];

  if (!Svg) return <>no icon</>;
  return (
    <Svg width={size} height={size} color={color} style={{ flexShrink: 0 }} />
  );
};

export default Icon;
