import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

const GenderSelectBox = (props) => {

  const gender = [
    { label: '男性', value: '1' },
    { label: '女性', value: '2' },
    { label: 'その他', value: '3' },
  ]

  return (
    <FormControl fullWidth>
      <InputLabel>性別</InputLabel>
      <Select
        required
        name={'gender' + props.index}
        label="性別"
        disabled={props.disabled}
        defaultValue={props.value}
        onChange={props.handleChange}
      >
        {gender.map(e => {
          return (
            <MenuItem
              value={e.value}
              key={e.value}
            >
              {e.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  )

}

export default GenderSelectBox;