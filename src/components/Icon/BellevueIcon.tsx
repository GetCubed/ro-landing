import React from 'react';
import BellevueSvg from './bellevue.svg';

export interface BellevueIconProps extends React.ComponentProps<'svg'> {
  size?: number;
}

const BellevueIcon: React.FC<BellevueIconProps> = ({ size = 24, ...props }) => (
  <BellevueSvg width={size} height={size} {...props} />
);

export default BellevueIcon;
