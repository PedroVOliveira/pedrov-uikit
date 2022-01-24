import React from 'react'

export type propsTypes = {
  onClick?: () => void
  variant?: 'text' | 'outlined' | 'contained' | undefined
  color?: 'inherit' | 'primary' | 'secondary' | 'default'
  loading?: boolean
  disabled?: boolean
  style?: React.CSSProperties
}
