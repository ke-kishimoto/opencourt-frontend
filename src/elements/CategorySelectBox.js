import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CategorySelectBox = () => {

  const categories = [
    { id: 1, label: '社会人' },
    { id: 2, label: '大学生' },
    { id: 3, label: '高校生以下' },
  ]

  return (
    <FormControl fullWidth>
      <InputLabel>カテゴリ</InputLabel>
      <Select
        required
        name="category"
        label="カテゴリ"
      >
        {categories.map(e => {
          return (
            <MenuItem
              value={e.id}
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

export default CategorySelectBox;