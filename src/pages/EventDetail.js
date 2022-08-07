import EventDefaultItem from '../components/EventDetailItem'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import UserItem from '../components/UserItem'

const EventDetail = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<EventDefaultItem />
			</Grid>
			<Grid item xs={12}>
				<Button 
					variant="outlined"
					sx={{ 
						m:5
					}}
					onClick={() => { }}
				>
					参加申し込み
				</Button>
			</Grid>
			<Grid item xs={12}>
				<UserItem />
			</Grid>
		</Grid>
	)
}

export default EventDetail;