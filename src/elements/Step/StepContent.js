import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib/index'
import StepDescription from './StepDescription'
import StepTitle from './StepTitle'

/**
 * A step can contain a content.
 */
function StepContent(props) {
  const { children, className, description, title } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(StepContent, props)
  const ElementType = getElementType(StepContent, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(StepTitle, val => ({ title: val }), title)}
      {createShorthand(StepDescription, val => ({ description: val }), description)}
    </ElementType>
  )
}

StepContent._meta = {
  name: 'StepContent',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Shorthand for StepDescription. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for StepTitle. */
  title: customPropTypes.itemShorthand,
}

export default StepContent
