import Container from '@mui/material/Container';
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

const EventSales = () => {

	const [eventInfos, setEventInfos] = useState([]);

	useEffect(() => {
		setEventInfos([
			{id: 1, user_name: 'aaaa', attendance: '○', sales: 100, memo: ''},
			{id: 2, user_name: 'bbbb', attendance: '○', sales: 100, memo: ''},
		])
	}, []);

	return (
		<Container>
			<Grid container spacing={5} margin={1}>
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
			{eventInfos.map(e => {
				return (
					<>
						<Grid item xs={3}>
							<Typography>{e.user_name}</Typography>
						</Grid>
						<Grid item xs={3}>
							<FormControl sx={{ width: '50%' }}>
								<InputLabel>出欠</InputLabel>
								<Select
									required
									name="attendance"
									label="出欠"
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
							/>
						</Grid>
						<Grid item xs={3}>
						<TextField
								fullWidth
								label="備考"
								variant="outlined"
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
		</Container>
	)
}

export default EventSales;