import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const PrivacyPolicyManagement = () => {
	return (
		<Container maxWidth={'md'}>
			<Grid container spacing={5} margin={1}>
				<Grid item xs={12}>
					<Typography>プライバシーポリシー管理</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						multiline
						rows={20}
						fullWidth
						label="プライバシーポリシー"
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

export default PrivacyPolicyManagement;