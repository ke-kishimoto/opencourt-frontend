import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const TemplateManagement = () => {

	const [templates, setTemplates] = useState([]);

	useEffect(() => {
		setTemplates([
			{ id: 1, templateName: 'テンプレート名1' },
		])
	}, [])

	return (
		<Container maxWidth={'lg'}>

			<Grid container spacing={3} margin={5} >
				<Grid item xs={12}>
					<Typography>テンプレート管理</Typography>
				</Grid>
				<Grid item xs={12}>
					<FormControl sx={{ width: '50%' }}>
						<InputLabel>テンプレート</InputLabel>
						<Select
							required
							name="template"
							label="テンプレート"
						>
							{templates.map(e => {
								return (
									<MenuItem
										value={e.id}
										key={e.id}
									>
										{e.templateName}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="テンプレート名"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="イベント名"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="イベント名略称"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="開催場所"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						type="number"
						label="人数"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						multiline
						rows={4}
						label="詳細"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={6}>
					<Button
						variant="outline"
					>
						クリア
							</Button>
				</Grid>
				<Grid item xs={6}>
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

export default TemplateManagement;