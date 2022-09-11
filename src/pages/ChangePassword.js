import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import RegisterBtn from '../elements/RegistBtn';
import { useState } from 'react';

const ChangePassword = () => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const validation = () => {
    return true;
  }

  return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={5} margin={1}>
        <Grid item xs={12}>
					<TextField
            fullWidth
            name="password"
            type="password"
						label="現在のパスワード"
						variant="outlined"
            onChange={e => setCurrentPassword(e.target.value)}
					/>
				</Grid>
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
            endpoint={'/changePassword'}
            mode={'new'}
            data={{
              password: currentPassword,
              newPassword: newPassword,
              rePassword: rePassword,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ChangePassword;