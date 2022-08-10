import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const GenderSelectBox = () => {

  const gender = [
    { label: '男性', value: 'men' },
    { label: '女性', value: 'women' },
  ]

  return (
    <FormControl fullWidth>
      <InputLabel>性別</InputLabel>
      <Select
        required
        name="gender"
        label="性別"
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