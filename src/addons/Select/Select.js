import React from 'react'

import { META } from '../../lib/index'
import Dropdown from '../../modules/Dropdown/index'

/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  return <Dropdown {...props} selection />
}

Select._meta = {
  name: 'Select',
  type: META.TYPES.ADDON,
}

Select.Divider = Dropdown.Divider
Select.Header = Dropdown.Header
Select.Item = Dropdown.Item
Select.Menu = Dropdown.Menu

export default Select
