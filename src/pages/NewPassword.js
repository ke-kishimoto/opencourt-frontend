import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import RegisterBtn from '../elements/RegistBtn';
import { useState } from 'react';

const NewPassword = () => {

  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const validation = () => {
    return true;
  }

  return (
    <Container maxWidth={'lg'}
      sx={{
        minHeight: 650,
      }}
    >
			<Grid container spacing={5} margin={1}>
        <Grid item xs={12}>
					<TextField
            fullWidth
            name="newPassword"
            type="password"
						label="新しいパスワード"
						variant="outlined"
            onChange={e => setNewPassword(e.target.value)}
					/>
				</Grid>
        <Grid item xs={12}>
					<TextField
            fullWidth
            name="rePassword"
            type="password"
						label="新しいパスワード（確認用）"
						variant="outlined"
            onChange={e => setRePassword(e.target.value)}
					/>
				</Grid>
        <Grid item xs={12}>
          <RegisterBtn 
            validation={validation}
            endpoint={'/'}
            mode={'new'}
            data={{
              newPassword: newPassword,
              rePassword: rePassword,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default NewPassword;