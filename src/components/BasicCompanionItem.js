import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const BasicCompanionItem = (props) => {
  return (
    <Box sx={{ p: 2,
      marginLeft: 10,
      marginRight: 2,
      marginTop: 2,
      marginBottom: 2,
      border: '1px solid grey',
			borderRadius: '5px',
			'&:hover': {
				backgroundColor: '#EEE',
			},}}
		>
      <Grid container>
        <Grid item xs={2}>
          <Typography>同伴者{props.index + 1}</Typography>
        </Grid>
        <Grid item xs={2}>
          {props.companion.name}
        </Grid>
        <Grid item xs={2}>
        {props.companion.gender_name}
        </Grid>
        <Grid item xs={2}>
        {props.companion.user_category.category_name}
        </Grid>
        <Grid item xs={5}/>
      </Grid>
		</Box>
  )
}

export default BasicCompanionItem;