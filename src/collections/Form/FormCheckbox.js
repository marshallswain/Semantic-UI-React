import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib/index'
import Checkbox from '../../modules/Checkbox/index'

import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Checkbox} />
 * @see Checkbox
 * @see Form
 */
function FormCheckbox(props) {
  const { control } = props
  const rest = getUnhandledProps(FormCheckbox, props)
  const ElementType = getElementType(FormCheckbox, props)

  return <ElementType {...rest} control={control} />
}

FormCheckbox._meta = {
  name: 'FormCheckbox',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormCheckbox.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormCheckbox.defaultProps = {
  as: FormField,
  control: Checkbox,
}

export default FormCheckbox
