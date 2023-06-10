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
  return <Svg width={size} height={size} color={color} viewBox="0 0 24 24" />; // svgr cli 에서 자꾸 viewBox를 지워버려서 강제로 넣어둠
};

export default Icon;
