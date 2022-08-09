import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CategorySelectBox from '../elements/CategorySelectBox';
import GenderSelectBox from '../elements/GenderSelectBox';

const UserForm = () => {

	return (
		<Container maxWidth={'md'}>

			<Grid container spacing={5} margin={1}>
				<Grid item xs={12}>
					<Avatar>U</Avatar>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="メールアドレス"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="名前"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<GenderSelectBox />
				</Grid>
				<Grid item xs={12}>
          <CategorySelectBox />
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="パスワード"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="パスワード（確認用）"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						multiline
						rows={4}
						fullWidth
						label="自己紹介"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={7} />
				<Grid item xs={2}>
					<Button
						variant="contained"
					>
						登録
						</Button>
				</Grid>
				<Grid item xs={3} />
			</Grid>
		</Container>
	)
}

export default UserForm;