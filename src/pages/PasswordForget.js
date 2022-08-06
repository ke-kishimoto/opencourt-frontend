import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PasswordForget = () => {
	return (
		<Grid container spacing={5} margin={1}>
			<Grid item xs={3} />
				<Grid item xs={5}>
					<TextField
						fullWidth
						label="メールアドレス"
						variant="outlined"
					/>
				</Grid>
			<Grid item xs={3} />
			<Grid item xs={7} />
			<Grid item xs={2}>
				<Button
					variant="contained"
				>
					送信
					</Button>
			</Grid>
			<Grid item xs={3} />
		</Grid>
	)
}

export default PasswordForget;