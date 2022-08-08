import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

const LogManagement = () => {

	const [fileList, setFileList] = useState([]);

	useEffect(() => {
		setFileList([
			{fileName: 'xxxx.log', content: '1234567890'},
			{fileName: 'zzzz.log', content: 'asdfghjklzxcvbnmqwertyuio'},
		]);
	}, [])

	return (
		<Container maxWidth={'md'}>
			<Grid container spacing={5} margin={1}>
				<Grid item xs={12}>
					<Typography>ログ管理</Typography>
				</Grid>
				<Grid item xs={12}>
				<FormControl sx={{ width: '50%' }}>
						<InputLabel>ログファイル</InputLabel>
						<Select
							required
							name="log"
							label="ログファイル"
						>
							{fileList.map(e => {
								return (
									<MenuItem
										value={e.fileName}
										key={e.fileName}
									>
										{e.fileName}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						multiline
						rows={20}
						fullWidth
						label="ログ"
						variant="outlined"
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default LogManagement;