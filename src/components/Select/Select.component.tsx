import React from 'react'

import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select as SelectMaterial
} from '@material-ui/core'

export const Select = ({ label, options, value, setValue }) => {
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <SelectMaterial label="Age">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectMaterial>
        </FormControl>
      </Box>
    </>
  )
}
