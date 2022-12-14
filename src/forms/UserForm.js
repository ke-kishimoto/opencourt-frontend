import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import RegisterBtn from '../elements/RegistBtn';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import BasicUserForm from './BasicUserForm';
import { useState } from 'react';

const UserForm = (props) => {

  const [user, setUser] = useState(props.user);

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
        <Grid item xs={12}
          sx={{ display: props.mode === 'new' ? 'block' : 'none' }}
        >
					<TextField
            fullWidth
            type="password"
            name="password"
						label="パスワード"
						variant="outlined"
            onChange={handleChange}
            
					/>
				</Grid>
        <Grid item xs={12}
          sx={{ display: props.mode === 'new' ? 'block' : 'none' }}
        >
					<TextField
            fullWidth
            type="password"
            name="rePassword"
						label="パスワード（確認用）"
						variant="outlined"
            onChange={handleChange}
            sx={{ display: props.mode === 'new' ? 'block' : 'none' }}
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
            mode={props.mode}
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

export default UserForm;