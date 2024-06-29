import React from "react";
import './Label.scss';

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  const { className = '', ...restProps } = props;
  return <label className={`vrc-label ${className}`} {...restProps} />
}
