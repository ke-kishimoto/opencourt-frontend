import EventDetailItem from '../components/EventDetailItem'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import UserItem from '../components/UserItem'
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EventDetail = () => {

	const navigate = useNavigate();

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<EventDetailItem />
			</Grid>
			<Grid item xs={2}>
				<Button
					variant="outlined"
					sx={{
						m: 5
					}}
					onClick={() => { }}
				>
					参加申し込み
				</Button>
			</Grid>
			<Grid item xs={2.5}>
				<Button
					variant="outlined"
					color="secondary"
					sx={{
						m: 5
					}}
					onClick={() => { }}
				>
					参加キャンセル
				</Button>
			</Grid>
			<Grid item xs={2}>
				<Button
					variant="outlined"
					sx={{
						m: 5
					}}
					onClick={() => { }}
				>
					修正
				</Button>
			</Grid>
			<Grid item xs={2}>
				<Button
					variant="outlined"
					sx={{
						m: 5
					}}
					onClick={() => {navigate('eventSales')}}
				>
					売上入力
				</Button>
			</Grid>
			<Grid item xs={12}>
				<Outlet />
			</Grid>
		</Grid>
	)
}

export default EventDetail;