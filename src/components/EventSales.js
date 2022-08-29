import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { useAxios } from '../utils/axiosUtil';

const EventSales = () => {

  const axios = useAxios();
  const [eventUsers, setEventUsers] = useState([]);
  const { id } = useParams();

	useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get('/getEventUser/' + id);
      setEventUsers(result.data);
    }
    fetchData();

	}, []);

	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Typography>名前</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography>出欠</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography>回収金額</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography>備考</Typography>
				</Grid>
				<Grid item xs={12}>
					<hr/>
				</Grid>
			{eventUsers.map((e, index) => {
				return (
					<>
						<Grid item xs={3}>
							<Typography>{e.user.name}</Typography>
						</Grid>
						<Grid item xs={3}>
							<FormControl sx={{ width: '50%' }}>
								<InputLabel>出欠</InputLabel>
								<Select
									required
									name="attendance"
                  label="出欠"
                  defaultValue={eventUsers[index].attendance}
								>
									<MenuItem value={1}>{'○'}</MenuItem>
									<MenuItem value={2}>{'×'}</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={3}>
							<TextField
								fullWidth
								type="number"
								label="回収金額"
                variant="outlined"
                value={eventUsers[index].amount}
							/>
						</Grid>
						<Grid item xs={3}>
						<TextField
								fullWidth
								label="備考"
                variant="outlined"
                value={eventUsers[index].amount_remark}
							/>
						</Grid>
					</>
				)
			})}
				<Grid item xs={10}/>
				<Grid item xs={2}>
					<Button
						variant="contained"
						>
						登録
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default EventSales;