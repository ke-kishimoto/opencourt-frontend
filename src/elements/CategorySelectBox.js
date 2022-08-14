import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const CategorySelectBox = (props) => {

  const axios = useAxios();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/userCategory');
      setCategories(result.data.filter(e => e.category_name !== ''));
    };
    fetchDate();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>カテゴリ</InputLabel>
      <Select
        required
        name="category"
        label="カテゴリ"
        disabled={props.disabled}
        defaultValue={props.value}
      >
        {categories.map(e => {
          return (
            <MenuItem
              value={e.id}
              key={e.id}
            >
              {e.category_name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  )

}

export default CategorySelectBox;