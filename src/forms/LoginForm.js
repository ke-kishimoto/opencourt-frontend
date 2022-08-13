import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState, tokenState } from "../states/atoms/userAtom";

const LoginForm = () => {

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const setUser = useSetRecoilState(userState);
  const setToken = useSetRecoilState(tokenState);
  const navigate = useNavigate();

	return (
		<Grid container spacing={5}>
			<Grid item xs={12}>
        <Typography textAlign={'center'}
          color={'red'}
          display={isError ? 'block' : 'none'}
        >
          メールアドレスかパスワードが間違っています。
        </Typography>
      </Grid>
			<Grid item xs={3} />
			<Grid item xs={5}>
				<TextField
					fullWidth
					label="メールアドレス"
          variant="outlined"
          onChange={e => setLoginId(e.target.value)}
				/>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={3} />
			<Grid item xs={5}>
				<TextField
					fullWidth
					label="パスワード"
          variant="outlined"
          type="password"
          onChange={e => setPassword(e.target.value)}
				/>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={7} />
			<Grid item xs={2}>
				<Button
          variant="contained"
          onClick={() => {
            console.log(process.env.REACT_APP_URL)
            axios.get(`${process.env.REACT_APP_URL}/sanctum/csrf-cookie`, { withCredentials: true })
            .then(res => {
              axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                email: loginId,
                password: password
              }, { withCredentials: true })
              .then(res => {
                if(res.status === 200) {
                  setUser(() => res.data.user)
                  setToken(() => res.data.token);
                  navigate('/')
                } else {
                  console.log('ログイン失敗')
                  setIsError(true);
                }
              }).catch(error => {
                console.log(error)
                setIsError(true)
              })
            }).catch(error => {
              console.log(error)
              setIsError(true)
            })
          }
        }
				>
					ログイン
					</Button>
			</Grid>
			<Grid item xs={3} />
		</Grid>
	)
}

export default LoginForm;