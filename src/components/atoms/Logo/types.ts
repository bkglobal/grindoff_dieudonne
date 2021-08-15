import { Size } from 'src/components/common-types';

export interface BaseLogoProps {
  /**
   * The size of `Button`
   * @default "regular"
   */
  size?: Size;
  /**
   * Logo's href
   * @default "/"
   */
  href?: string;
}
