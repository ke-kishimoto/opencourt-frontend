import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import UserMenu from './UserMenu';
import { isLoginState, getUser } from '../states/selectors/userSelector';

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginState);
  const user = useRecoilValue(getUser);
  
  console.log(getUser)

  const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClose = () => {
		setAnchorEl(null);
  };
  
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
  };

	return (
		<>
			<Grid container spacing={2} margin={1}>
				<Grid item xs={1}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
				</Grid>
				<Grid item xs={8}>
					<Link to="/">タイトル</Link>
				</Grid>
        {!isLogin ? 
        <>
          <Grid item xs={1}>
            <Button
              variant="outlined"
              onClick={() => { navigate('/login') }}
            >
              ログイン
          </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="outlined"
              onClick={() => { navigate('/newUser') }}
            >
              新規登録
          </Button>
          </Grid>
        </>
        :<Typography>{user.name}</Typography>}
				
			</Grid>
      <UserMenu 
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
		</>
	)
}

export default Header;