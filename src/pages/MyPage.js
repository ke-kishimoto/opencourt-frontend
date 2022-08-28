import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinForm from '../components/JoinEvents';
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
      <Button
        variant="outlined"
        onClick={() => navigate('/editUser')}
      >
        ユーザー情報変更
      </Button>
      <JoinForm 
        id={user.id}
      />
    </Container>
  )
}

export default MyPage;