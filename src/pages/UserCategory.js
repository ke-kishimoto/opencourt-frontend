import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const UserCategory = () => {
	return (
		<Container maxWidth={'md'}>
			<Grid container spacing={2} margin={1}>
				<Grid item xs={12}>
					<Typography>ユーザーカテゴリ管理</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="カテゴリ1"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="カテゴリ2"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="カテゴリ3"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="カテゴリ4"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="カテゴリ5"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={10}/>
				<Grid item xs={2}>
					<Button
						variant="contained"
					>
						更新
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default UserCategory;