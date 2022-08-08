import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';


const SegmentDelivery = () => {

	const [events, setEents] = useState([]);

	useEffect(() => {
		setEents([
			{id:1, event_name: 'バスケ'},
			{id:2, event_name: 'サッカー'},
		])
	}, [])

	return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={5} margin={1}>
				<Grid item xs={12}>
					<Typography>セグメント配信</Typography>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel control={<Checkbox />} label="カテゴリ1" />
					<FormControlLabel control={<Checkbox />} label="カテゴリ2" />
					<FormControlLabel control={<Checkbox />} label="カテゴリ3" />
					<FormControlLabel control={<Checkbox />} label="カテゴリ4" />
					<FormControlLabel control={<Checkbox />} label="カテゴリ5" />
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel control={<Checkbox />} label="男性" />
					<FormControlLabel control={<Checkbox />} label="女性" />
				</Grid>
				<Grid item xs={12}>
				<FormControl sx={{ width: '50%' }}>
						<InputLabel>対象イベント</InputLabel>
						<Select
							required
							name="event"
							label="対象イベント"
						>
							{events.map(e => {
								return (
									<MenuItem
										value={e.id}
										key={e.id}
									>
										{e.event_name}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<Typography>配信対象人数：xxx</Typography>
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