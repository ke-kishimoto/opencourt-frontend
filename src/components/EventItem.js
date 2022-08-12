import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { getStatusColorCode, } from '../utils/colorUtil';

const EventItem = (props) => {

  const navigate = useNavigate();
  
  const colorCode = getStatusColorCode(props.eventInfo.status);

	return(
		<Box
			sx={{
				p: 2,
				border: `solid 1px ${colorCode}`,
				borderRadius: 3,
				cursor: 'pointer',
				'&:hover': {
					bgcolor: `${colorCode}`,
					opacity: '0.7',
				}
			}}
			onClick={() => {
        navigate(`/eventDetail/${props.eventInfo.id}`)
      }}
		>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Typography>イベント名：{props.eventInfo.event_name}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>開催日時：xxxxx</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>開催場所：xxxxx</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>空き状況：xxxxx</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default EventItem;