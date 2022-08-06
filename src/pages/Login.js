import LoginForm from '../components/LoginForm';
import Grid from '@mui/material/Grid';


const Login = () => {
  return (
		<>
			<LoginForm />
			<Grid container spacing={2} margin={1}>
				<Grid item xs={3} />
				<Grid item xs={2}>
					パスワードを忘れた場合
				</Grid>
				<Grid item xs={2}>
					新規登録
				</Grid>
				<Grid item xs={4} />
			</Grid>
		</>
	)
}

export default Login;