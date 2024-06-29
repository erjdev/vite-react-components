import React from "react";
import './Input.scss';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const { className = '', ...restProps } = props;
  return <input className={`vrc-input ${className}`} {...restProps} />
}
