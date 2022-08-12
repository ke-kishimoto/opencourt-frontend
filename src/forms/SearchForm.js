import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

const SearchForm = () => {
	return (
		<Box
      sx={{marginBottom:5}}
    >
      <FormControl 
        sx={{width: '80%', 
            marginRight:5,
            marginLeft:5,
            marginBottom: 3,
          }}
      >
        <TextField label="キーワード検索" variant="outlined" size="small" color="secondary" />
      </FormControl>
      <Button variant="contained" color="secondary"><SearchIcon /></Button>
      <Pagination 
        sx={{marginLeft: 5}}
        count={10} 
        color="primary" 
      />
    </Box>
	)
}

export default SearchForm;