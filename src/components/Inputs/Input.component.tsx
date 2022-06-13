import React from 'react'

import { TextField, Box } from '@material-ui/core'

import { ITextField } from './Input.types'

import { theme } from '../../themes/'

export const Input: React.FC<ITextField> = ({
  variant = 'outlined',
  label = 'Input',
  value,
  onChange,
  error,
  fullWidth = true,
  onBlur,
  required,
  errorMessage,
  style
}) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        variant={variant}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        type="text"
        error={error}
        fullWidth={fullWidth}
        style={{ ...style }}
      />
      {error && (
        <Box pt={1} color={theme.palette.error.main}>
          {errorMessage}
        </Box>
      )}
    </>
  )
}
