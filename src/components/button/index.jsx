import React from 'react';
import useStyles from './index.styles';

/**
 * Reusable Button Component
 * @param {string} variant - 'primary' | 'secondary' | 'ghost' | 'outline'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} disabled - Button disabled state
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional classes
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
  ...props
}) => {
  const classes = useStyles();

  const buttonClasses = [
    classes.button,
    classes[`variant-${variant}`],
    classes[`size-${size}`],
    disabled && classes.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
