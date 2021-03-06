import * as React from 'react';
import {
  SemanticCOLORS,
  SemanticFLOATS,
  SemanticSIZES,
  SemanticWIDTHS
} from '../../index';

export interface ButtonProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A button can show it is currently the active user selection. */
  active?: boolean;

  /** A button can animate to show hidden content. */
  animated?: 'fade' | 'vertical';

  /** A button can be attached to the top or bottom of other content. */
  attached?: 'left' | 'right' | 'top' | 'bottom';

  /** A basic button is less pronounced. */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** A button can be circular. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** A button can have different colors. */
  color?: SemanticCOLORS | 'facebook' | 'google plus' | 'vk' | 'twitter' | 'linkedin' | 'instagram' | 'youtube';

  /** A button can reduce its padding to fit into tighter spaces. */
  compact?: boolean;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** A button can show it is currently unable to be interacted with. */
  disabled?: boolean;

  /** A button can be aligned to the left or right of its container. */
  floated?: SemanticFLOATS;

  /** A button can take the width of its container. */
  fluid?: boolean;

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon?: any;

  /** A button can be formatted to appear on dark backgrounds. */
  inverted?: boolean;

  /** Add a Label by text, props object, or pass a <Label />. */
  label?: any;

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition?: 'right' | 'left';

  /** A button can show a loading indicator. */
  loading?: boolean;

  /** A button can hint towards a negative consequence. */
  negative?: boolean;

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => void;

  /** A button can hint towards a positive consequence. */
  positive?: boolean;

  /** A button can be formatted to show different levels of emphasis. */
  primary?: boolean;

  /** A button can be formatted to show different levels of emphasis. */
  secondary?: boolean;

  /** A button can have different sizes. */
  size?: SemanticSIZES;

  /** A button can receive focus. */
  tabIndex: number | string;

  /** A button can be formatted to toggle on and off. */
  toggle?: boolean;
}

interface ButtonComponent extends React.ComponentClass<ButtonProps> {
  Content: typeof ButtonContent;
  Group: typeof ButtonGroup;
  Or: typeof ButtonOr;
}

export const Button: ButtonComponent;

interface ContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initially hidden, visible on hover. */
  hidden?: boolean;

  /** Initially visible, hidden on hover. */
  visible?: boolean;
}

export const ButtonContent: React.StatelessComponent<ContentProps>;

interface GroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A button can be attached to the top or bottom of other content. */
  attached?: 'left' | 'right' | 'top' | 'bottom';

  /** Groups can be less pronounced. */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Groups can have a shared color. */
  color?: SemanticCOLORS;

  /** Groups can reduce their padding to fit into tighter spaces. */
  compact?: boolean;

  /** Groups can take the width of their container. */
  fluid?: boolean;

  /** Groups can be formatted as icons. */
  icon?: boolean;

  /** Groups can be formatted to appear on dark backgrounds. */
  inverted?: boolean;

  /** Groups can be formatted as labeled icon buttons. */
  labeled?: boolean;

  /** Groups can hint towards a negative consequence. */
  negative?: boolean;

  /** Groups can hint towards a positive consequence. */
  positive?: boolean;

  /** Groups can be formatted to show different levels of emphasis. */
  primary?: boolean;

  /** Groups can be formatted to show different levels of emphasis. */
  secondary?: boolean;

  /** Groups can have different sizes. */
  size?: SemanticSIZES;

  /** Groups can be formatted to toggle on and off. */
  toggle?: boolean;

  /** Groups can be formatted to appear vertically. */
  vertical?: boolean;

  /** Groups can have their widths divided evenly. */
  widths?: SemanticWIDTHS;
}

export const ButtonGroup: React.StatelessComponent<GroupProps>;

interface OrProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;
}

export const ButtonOr: React.StatelessComponent<OrProps>;
