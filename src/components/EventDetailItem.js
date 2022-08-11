import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getStatusColorCode, } from '../utils/colorUtil';

const EventDetailItem = () => {

  const [eventInfo, setEventInfo] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    setEventInfo({
      status: 1,
    })
  }, [])

	return (
		<Box
		sx={{
      p: 2,
      marginTop: 2,
			border: `solid 1px ${getStatusColorCode(eventInfo.status)}`,
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