import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinForm from '../components/JoinEvents';
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';

const MyPage = () => {

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
      <JoinForm 
        id={user.id}
      />
    </Container>
  )
}

export default MyPage;