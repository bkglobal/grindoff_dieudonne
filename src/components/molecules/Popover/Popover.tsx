import * as React from 'react';
import classNames from 'classnames';
import PopperWrapper, { PopperWrapperProps } from 'src/components/atoms/PopperWrapper/PopperWrapper';
import { BaseProps } from 'src/components/common-types';

type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'right';

export interface CustomStyle {
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}

const propsList = [
  'appendToBody',
  'trigger',
  'hoverable',
  'on',
  'open',
  'closeOnBackdropClick',
  'offset',
  'closeOnScroll',
] as const;
type PopperProps = typeof propsList[number];

export interface PopoverProps extends Pick<PopperWrapperProps, PopperProps>, BaseProps {
  /**
   * To be rendered in `Popover` component
   */
  children: React.ReactNode;
  /**
   * Position to place the `trigger`
   *
   * @param Position - 'top' | 'top-start' | 'top-end' | 'bottom'
   * | 'bottom-start' | 'bottom-end' | 'left' | 'right'
   */
  position: Position;
  /**
   * Callback after `Popover` is toggled
   *
   * @param type - 'onMouseLeave' | 'onMouseEnter' | 'outsideClick' | 'onClick'
   */
  onToggle?: (open: boolean, type?: string) => void;
  /**
   * Changes background of `Popover`
   */
  dark?: boolean;
  /**
   * Adds custom CSS to `Popover` element
   *
   * <pre className="DocPage-codeBlock">
   * CustomStyle {
   *  height?: number | string;
   *  width?: number | string;
   *  minWidth?: number | string;
   *  minHeight?: number | string;
   *  maxHeight?: number | string;
   *  maxWidth?: number | string;
   * }
   * </pre>
   */
  customStyle: CustomStyle;
  /**
   * Class to be added to PopperWrapper trigger
   */
  triggerClass?: string;
  /**
   * Hides the `Popover` when its reference element is outside of the `Popover` boundaries
   */
  hideOnReferenceEscape?: boolean;
  /**
   * BoundaryElement for `Popover`
   */
  boundaryElement: React.RefObject<HTMLElement> | Element;
}

export const Popover = (props: PopoverProps) => {
  const {
    position,
    customStyle,
    dark,
    children,
    onToggle,
    className,
    hideOnReferenceEscape,
    boundaryElement,
    ...rest
  } = props;

  const [open, setOpen] = React.useState<boolean>(!!props.open);
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    if (props.open !== undefined) setOpen(props.open);
  }, [props.open]);

  const defaultOnToggle = React.useCallback((newOpen) => {
    setOpen(newOpen);
  }, []);

  React.useEffect(() => {
    if (!init) {
      if ('current' in boundaryElement && boundaryElement.current) {
        setInit(true);
      }
    }
  }, [boundaryElement]);

  const classes = classNames(
    {
      Popover: true,
      ['Popover--dark']: dark,
    },
    className
  );

  const PopoverWrapper = (
    <div data-test="DesignSystem-Popover" className={classes} data-layer={true}>
      {children}
    </div>
  );

  return (
    <PopperWrapper
      {...rest}
      init={init}
      boundaryElement={'current' in boundaryElement ? boundaryElement.current : boundaryElement}
      open={open}
      hide={hideOnReferenceEscape}
      style={customStyle}
      onToggle={onToggle || defaultOnToggle}
      placement={position}
    >
      {PopoverWrapper}
    </PopperWrapper>
  );
};

const filterProps = (val: any) => {
  if (!val) return false;
  if (val && val.name === 'actionHandler') return false;
  // if(val && typeof val === 'function') return false;
  return true;
};

Popover.displayName = 'Popover';
Popover.defaultProps = Object.assign({}, filterProps(PopperWrapper.defaultProps), {
  offset: 'large',
  position: 'bottom',
  hideOnReferenceEscape: true,
  customStyle: {},
  boundaryElement: document.body,
});

export default Popover;
