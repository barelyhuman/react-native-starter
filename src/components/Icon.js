import React from 'react'

import * as IconSVG from '../../assets/icons'

export default function Icon({ name, color, props }) {
  const _Icon = IconSVG[name]
  return <_Icon color={color} {...props} />
}
