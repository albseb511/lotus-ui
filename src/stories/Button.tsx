import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useRef, ButtonHTMLAttributes } from "react";
import { useButton } from "@react-aria/button";
import { useHover } from '@react-aria/interactions'


interface ButtonProps<T> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onPress?: () => void;
  /**
   * children
   */
  label: string;
  /**
   * startIcon
   */
  startIcon?: JSX.Element | null;
  /**
   * endIcon
   */
  endIcon?: JSX.Element | null;
  /**
   * disabled
   */
  disabled?: boolean;
}

const useStyles = makeStyles({
  button: {
    fontFamily: `'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    fontWeight: 600,
    border: 0,
    borderRadius: "0.25rem",
    cursor: "pointer",
    display: "flex",
    gap: "4px",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1,
  },
  primary: {
    color: "white",
    backgroundColor: "#2B75CD",
  },
  secondary: {
    color: "#2B75CD",
    backgroundColor: "transparent",
    boxShadow: `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset`,
  },
  small: {
    fontSize: "14px",
    padding: "10px 16px",
    width: "100px",
    height: "32px"
  },
  medium: {
    fontSize: "14px",
    padding: "11px 20px",
    width: "120px",
    height: "32px"
  },
  large: {
    fontSize: "14px",
    padding: "12px 24px",
    width: "140px",
    height: "48px"
  },
  hover:{
    boxShadow: "0px 2px 3px rgba(5, 34, 89, 0.26)"
  },
  disabled: {
    background: "#E7E8EA",
    color: "#B6BABF"
  }
});

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  startIcon,
  endIcon,
  disabled = false,
  ...props
}: ButtonProps<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  let ref = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton(props, ref);
  const { hoverProps, isHovered } = useHover({});
  let classes = useStyles();


  return (
    <button
      type="button"
      className={clsx(
        classes.button,
        primary ? classes.primary : classes.secondary,
        classes[size],
        isHovered && !disabled && classes.hover,
        disabled && classes.disabled
      )}
      style={{ backgroundColor }}
      {...buttonProps}
      {...hoverProps}
      ref={ref}
      disabled
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};
