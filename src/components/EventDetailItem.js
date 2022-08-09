import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const EventDetailItem = () => {
	return (
		<Box
		sx={{
      p: 2,
      marginTop: 2,
			border: 'solid 1px #0C9',
			borderRadius: 3,
			
		}}
		>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Typography>イベント名</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>日時</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>場所</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>詳細</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>参加人数： xx / xx</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>参加費</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default EventDetailItem;