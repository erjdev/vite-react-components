import React from "react";
import './Button.scss';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className = '', ...restProps } = props;
  return <button className={`vrc-button ${className}`} {...restProps} />
}
