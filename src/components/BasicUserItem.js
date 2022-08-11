import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const BasicUserItem = (props) => {
  return (
    <Box sx={{ p: 2, m: 2 ,
			border: '1px solid grey',
			borderRadius: '5px',
			'&:hover': {
				backgroundColor: '#EEE',
			},}}
		>
      <Grid container>
        <Grid item xs={1}>
          <Avatar>U</Avatar>
        </Grid>
        <Grid item xs={2}>
          {props.user.name}
        </Grid>
        <Grid item xs={2}>
          {props.user.gender_name}
        </Grid>
        <Grid item xs={2}>
          {props.user.category_name}
        </Grid>
        <Grid item xs={5}/>
      </Grid>
		</Box>
  )
}

export default BasicUserItem;