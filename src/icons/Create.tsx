import * as React from 'react'

import type { IconProps } from './Icon.types'

export const CreateIcon = ({ width = 20,
  height = 20,
  fill = 'none',
  stroke = 'currentColor', }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 24 24" stroke={stroke} strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  )
}