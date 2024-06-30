import React from "react";
import { Label } from "../Label";
import './Input.scss';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  direction?: 'row' | 'col';
}

export const Input: React.FC<InputProps> = (props) => {
  const { className = '', direction = 'col', label, ...restProps } = props;
  const id = restProps.id || Math.random().toString(36).substring(7);
  return (
    <div className={`vrc-input-wrapper${direction === 'col' ? ' vrc-input-wrapper--col' : ''}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input className={`vrc-input ${className}`} {...restProps} />
    </div>
  );
}
