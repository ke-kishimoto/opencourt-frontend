import Container from '@mui/material/Container';
import LoginForm from '../forms/LoginForm';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import LineLogin from '../elements/LineLogin';

const Login = () => {

  return (
		<Container maxWidth={'sm'} sx={{minHeight: 650}}>
			<LoginForm />
			<Grid container spacing={2} margin={1}>
				<Grid item xs={6}>
					<Link to="/passwordForget">パスワードを忘れた方はこちら</Link>
				</Grid>
				<Grid item xs={6}>
					<Link to="/newUser">新規登録</Link>
				</Grid>
				<Grid item xs={12}>
          <LineLogin />
        </Grid>
			</Grid>
		</Container>
	)
}

export default Login;