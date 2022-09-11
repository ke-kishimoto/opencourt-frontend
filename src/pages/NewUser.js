import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import RegisterBtn from '../elements/RegistBtn';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import BasicUserForm from '../forms/BasicUserForm';
import { useState } from 'react';

const NewUser = () => {

  const userInit = {
    name1: '',
    gender1: '',
    category1: '',
    email: '',
    password: '',
    rePassword: '',
    description: '',
  }

  const [user, setUser] = useState(userInit);

  const validation = () => {
    return true;
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser(
      { ...user, [name]: value }
    )
  }

	return (
    <Container maxWidth={'lg'}>

    <Grid container spacing={5} margin={1}>
      <Grid item xs={12}>
        <Avatar>U</Avatar>
      </Grid>
      <BasicUserForm 
        disabled={false}
        handleChange={handleChange}
        index={1}
        user={user}
      />
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="email"
          label="メールアドレス"
          variant="outlined"
          onChange={handleChange}
          value={user.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="password"
          name="password"
          label="パスワード"
          variant="outlined"
          onChange={handleChange}
          
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="password"
          name="rePassword"
          label="パスワード（確認用）"
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          rows={4}
          fullWidth
          name="description"
          label="自己紹介"
          variant="outlined"
          onChange={handleChange}
          value={user.description}
        />
      </Grid>
      <Grid item xs={7} />
      <Grid item xs={2}>
        <RegisterBtn 
          mode={'new'}
          validation={validation}
          data={user}
          endpoint={'user'}
        />
      </Grid>
      <Grid item xs={3} />
    </Grid>
  </Container>
	)
}

export default NewUser;