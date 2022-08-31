import TextField from '@mui/material/TextField';
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
import RegisterBtn from '../elements/RegistBtn';

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
  
  const validation = () => {
    return true;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const index = Number(name.substr(-1));
    const newName = name.substring(0, name.length - 1)
    setEventUsers(
      eventUsers.map((eventUser, i) => {
        if(index !== i) {
          return eventUser;
        } else {
          eventUser[newName] = value;
          return eventUser;
        } 
      })
    )
  }

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
									name={'attendance' + index}
                  label="出欠"
                  defaultValue={eventUsers[index].attendance}
                  onChange={handleChange}
								>
									<MenuItem value={'attendance'}>{'○'}</MenuItem>
									<MenuItem value={'absence'}>{'×'}</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={3}>
							<TextField
                fullWidth
                name={'amount' + index}
								type="number"
								label="回収金額"
                variant="outlined"
                value={eventUsers[index].amount}
                onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={3}>
						<TextField
                fullWidth
                name={'amount_remark' + index}
								label="備考"
                variant="outlined"
                value={eventUsers[index].amount_remark}
                onChange={handleChange}
							/>
						</Grid>
					</>
				)
			})}
				<Grid item xs={10}/>
				<Grid item xs={2}>
          <RegisterBtn
            endpoint={'/eventUserSales'}
            mode={'update'}
            data={{eventUsers: eventUsers}}
            validation={validation}
          />
				</Grid>
			</Grid>
		</Box>
	)
}

export default EventSales;