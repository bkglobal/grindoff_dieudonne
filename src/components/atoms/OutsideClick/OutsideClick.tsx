import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from 'src/components/common-types';

export interface OutsideClickProps extends BaseHtmlProps<HTMLSpanElement>, BaseProps {
  /**
   * Trigger the function on outside click
   */
  onOutsideClick: (event: Event) => void;
  /**
   * Element to be rendered
   */
  children: React.ReactElement<any>;
  /**
   * Handler to be called when `OutsideClick` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const OutsideClick = React.forwardRef<HTMLDivElement, OutsideClickProps>((props, ref) => {
  const { children, className, onOutsideClick, ...rest } = props;

  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = React.useCallback((event: Event) => {
    const element = innerRef;

    if (!event.target || !element.current) {
      return;
    }

    if (!ReactDOM.findDOMNode(element.current)!.contains(event.target as HTMLElement)) {
      onOutsideClick(event);
    }
  }, []);

  const classes = classNames(className);

  return (
    <span ref={innerRef} {...rest} className={classes}>
      {children}
    </span>
  );
});

OutsideClick.displayName = 'OutsideClick';
export default OutsideClick;
