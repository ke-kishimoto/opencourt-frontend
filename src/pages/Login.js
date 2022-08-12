import LoginForm from '../forms/LoginForm';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

const Login = () => {
  return (
		<>
			<LoginForm />
			<Grid container spacing={2} margin={1}>
				<Grid item xs={3} />
				<Grid item xs={2}>
					<Link to="/passwordForget">パスワードを忘れた方はこちら</Link>
				</Grid>
				<Grid item xs={2}>
					<Link to="/newUser">新規登録</Link>
				</Grid>
				<Grid item xs={4} />
			</Grid>
		</>
	)
}

export default Login;