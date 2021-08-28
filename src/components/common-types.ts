export type ButtonType = 'button' | 'submit' | 'reset';
export type Appearance = 'basic' | 'primary' | 'success' | 'alert' | 'transparent' | 'white';
export type Size = 'tiny' | 'regular' | 'large';
export type Alignment = 'left' | 'right';
export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, 'ref' | 'size' | 'className'>;
export type SingleOrArray<T> = T | T[];
export type MakeRequired<T> = Exclude<T, null | undefined>;
export type BaseProps = {
  /**
   * Adds custom class
   */
  className?: string;
};
