import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';

const SearchForm = () => {
	return (
		<Grid container spacing={2} margin={1}>
			<Grid item xs={8}>
				<FormControl fullWidth>
					<TextField label="キーワード検索" variant="outlined" size="small" color="secondary" />
				</FormControl>
			</Grid>
			<Grid item xs={4}>
				<Button variant="contained" color="secondary"><SearchIcon /></Button>
			</Grid>
			<Grid item xs={12}>
			<Pagination count={10} color="primary" />
			</Grid>
		</Grid>
	)
}

export default SearchForm;