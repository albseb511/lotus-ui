import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useRef, ButtonHTMLAttributes } from 'react';
import { useButton } from 'react-aria';


interface ButtonProps <T> {
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
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onPress?: () => void;
  /**
   * 
   */
  children: JSX.Element | string
}

const useStyles = makeStyles({
  button: {
    fontFamily: `'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
  },
  primary: {
    color: "white",
    backgroundColor: "#1ea7fd",
  },
  secondary: {
    color: "#333",
    backgroundColor: "transparent",
    boxShadow: `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset`,
  },
  small: {
    fontSize: "12px",
    padding: "10px 16px",
  },
 medium: {
    fontSize: "14px",
    padding: "11px 20px",
  },
  large: {
    fontSize: "16px",
    padding: "12px 24px",
  }
});

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  ...props
}: ButtonProps<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  let ref = useRef<HTMLButtonElement | null>(null);
  let {buttonProps} = useButton(props, ref);
  let {children} = props;
  let classes = useStyles();

  return (
    <button type="button"
    className={clsx(
      classes.button,
      primary ? classes.primary: classes.secondary,
      classes[size]
    )}
    style={{ backgroundColor }}
    {...buttonProps} ref={ref}>
      {children}
    </button>
  );
};
