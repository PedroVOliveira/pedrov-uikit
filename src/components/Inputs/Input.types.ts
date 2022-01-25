import React from 'react'

export type ITextField = {
  variant?: 'outlined' | 'filled' | 'standard'
  label?: string
  value?: string
  error?: boolean
  onChange?: () => void
  onBlur?: () => void
  style?: React.CSSProperties
  required?: boolean
  fullWidth?: boolean
  errorMessage?: string
}
