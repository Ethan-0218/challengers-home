import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Clickable: FC<Props> = ({ children, ...props }) => {
  props.style = { ...props.style, cursor: 'pointer' };
  return <div {...props}>{children}</div>;
};

export default Clickable;
