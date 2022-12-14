import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RegisterBtn from '../elements/RegistBtn';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const UserCategory = () => {

  const MAX_ROW = 5;
  const range = [...Array(MAX_ROW).keys()];

  const axios = useAxios();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/userCategory');
      for (let i = result.data.length-1; i < MAX_ROW; i++) {
        result.data.push({});
      }
      setCategories(result.data);
    }
    fetchDate();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const index = Number(name.substr(-1));
    setCategories(
      categories.map((category, i) => {
        if(index !== i) {
          return category;
        } else {
          category.category_name = value;
          return category;
        } 
      })
    )
  }

  const validation = () => {
    return true;
  }

	return (
		<Container maxWidth={'md'} sx={{minHeight: 650}}>
			<Grid container spacing={2} margin={1}>
				<Grid item xs={12}>
					<Typography>ユーザーカテゴリ管理</Typography>
				</Grid>
        {range.map((e, index) => {
          return (
            <Grid item xs={12}>
              <TextField
                id={'user-category' + (index + 1)}
                key={index}
                fullWidth
                label={'カテゴリ' + (index + 1)}
                name={'category' + index}
                variant="outlined"
                value={categories.length >= (index + 1) ? categories[index].category_name : ''}
                onChange={handleChange}
              />
            </Grid>
          )
        })}
				<Grid item xs={10}/>
				<Grid item xs={2}>
					<RegisterBtn
            mode={'new'}
            endpoint={'/userCategory'}
            validation={validation}
            data={{categories: categories}}
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default UserCategory;