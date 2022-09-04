import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const SegmentDelivery = () => {

  const axios = useAxios();
  const [events, setEvents] = useState([]);
  const [targetUserCount, setTargetUserCount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const result = await axios.get('/getEventByMonth/' + year + '/' + String((month + 1)).padStart(2, '0'));
      setEvents(result.data)
    }
    fetchData();
  }, [])
  
  const onChange = async (event) => {
    const result = await axios.get('/getLinePushTargetUserCount/' + event.target.value)
    setTargetUserCount(result.data);
  }

	return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={5} margin={1}>
				<Grid item xs={12}>
				<FormControl sx={{ width: '50%' }}>
						<InputLabel>対象イベント</InputLabel>
						<Select
							required
							name="event"
              label="対象イベント"
              onChange={onChange}
						>
							{events.map(e => {
								return (
									<MenuItem
										value={e.id}
										key={e.id}
									>
										{e.short_title + ' : ' + e.event_date}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
            <Typography>配信対象人数：{targetUserCount}</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						multiline
						rows={10}
						fullWidth
						label="配信内容"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={10}/>
				<Grid item xs={2}>
					<Button
						variant="contained"
					>
						送信
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default SegmentDelivery;