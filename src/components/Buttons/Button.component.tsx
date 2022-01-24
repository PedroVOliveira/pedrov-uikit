import React from 'react'

import { Button as ButtonMaterial, CircularProgress } from '@material-ui/core/'

import { propsTypes } from './Button.types'

export const Button: React.FC<propsTypes> = ({
  children,
  variant = 'contained',
  disabled,
  color = 'primary',
  loading,
  style
}) => {
  return (
    <>
      <ButtonMaterial
        style={{ ...style }}
        color={color}
        variant={variant}
        disabled={disabled}
      >
        {loading ? (
          <CircularProgress
            style={
              variant === 'contained'
                ? { color: 'white' }
                : { color: 'inherit' }
            }
          />
        ) : (
          <>{children}</>
        )}
      </ButtonMaterial>
    </>
  )
}
