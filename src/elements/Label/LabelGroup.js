import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib/index'

function LabelGroup(props) {
  const {
    children,
    circular,
    className,
    color,
    size,
    tag,
  } = props

  const classes = cx(
    'ui',
    color,
    size,
    useKeyOnly(circular, 'circular'),
    useKeyOnly(tag, 'tag'),
    'labels',
    className
  )
  const rest = getUnhandledProps(LabelGroup, props)
  const ElementType = getElementType(LabelGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

LabelGroup._meta = {
  name: 'LabelGroup',
  parent: 'Label',
  type: META.TYPES.ELEMENT,
  props: {
    color: SUI.COLORS,
    size: SUI.SIZES,
  },
}

LabelGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Labels can share shapes. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Label group can share colors together. */
  color: PropTypes.oneOf(LabelGroup._meta.props.color),

  /** Label group can share sizes together. */
  size: PropTypes.oneOf(LabelGroup._meta.props.size),

  /** Label group can share tag formatting. */
  tag: PropTypes.bool,
}

export default LabelGroup
