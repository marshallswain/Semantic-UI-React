import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib/index'

function CommentMetadata(props) {
  const { className, children } = props
  const classes = cx('metadata', className)
  const rest = getUnhandledProps(CommentMetadata, props)
  const ElementType = getElementType(CommentMetadata, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentMetadata._meta = {
  name: 'CommentMetadata',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentMetadata.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default CommentMetadata
