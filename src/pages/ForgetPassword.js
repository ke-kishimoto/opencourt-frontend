import { useAxios } from '../utils/axiosUtil';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const ForgetPassword = () => {

  const axios = useAxios();
  const [email, setEmail] = useState('');

  const sendLink = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/forgot-password`, {
      email: email
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <Container maxWidth={'sm'} sx={{minHeight: 650}}>
      <Box sx={{
        p: 5,
      }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="メールアドレス"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={4} >
          <Button
            variant="contained"
            onClick={sendLink}
          >
            メール送信
          </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ForgetPassword;