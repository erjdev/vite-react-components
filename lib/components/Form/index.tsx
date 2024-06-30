import React from "react";
import './Form.scss';

export const Form: React.FC<React.PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>> = (props) => {
  const { className = '', children, ...restProps } = props;
  return (
    <form className={`vrc-form ${className}`} {...restProps}>
      {children}
    </form>
  );
}
