import Container from '@mui/material/Container';
import LoginForm from '../forms/LoginForm';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

const Login = () => {

  return (
		<Container maxWidth={'lg'} sx={{minHeight: 650}}>
			<LoginForm />
			<Grid container spacing={2} >
				<Grid item xs={3} />
				<Grid item xs={2}>
					<Link to="/passwordForget">パスワードを忘れた方はこちら</Link>
				</Grid>
				<Grid item xs={2}>
					<Link to="/newUser">新規登録</Link>
				</Grid>
				<Grid item xs={4} />
			</Grid>
		</Container>
	)
}

export default Login;