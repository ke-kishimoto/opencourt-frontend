import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinForm from '../components/JoinEvents';
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const MyPage = () => {

  const navigate = useNavigate();
  const user = useRecoilValue(getUser);

  return (
    <Container maxWidth={'lg'} 
      sx={{
        minHeight: 650,
      }}
    >
      <UserDetailItem 
        user={user}
      />
      <Grid container>

        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/editUser')}
          >
            ユーザー情報変更
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/changePassword')}
          >
            パスワード変更
          </Button>
        </Grid>
      </Grid>
      <JoinForm 
        id={user.id}
      />
    </Container>
  )
}

export default MyPage;