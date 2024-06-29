import React from "react";
import './Label.scss';

export type LabelProps = {
  direction?: 'row' | 'col';
} & React.PropsWithChildren<React.LabelHTMLAttributes<HTMLLabelElement>>;

export const Label: React.FC<LabelProps> = (props) => {
  const { className = '', children, direction = 'row', ...restProps } = props;
  return (
    <label className={`vrc-label${direction == 'col' ? ' vrc-label--col ' : ' '}${className}`} {...restProps}>
      {children}
    </label>
  );
}
