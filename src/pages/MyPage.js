import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinForm from '../components/JoinEvents';
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';

const MyPage = () => {

  const user = useRecoilValue(getUser);

  return (
    <Container maxWidth={'lg'}>
      <UserDetailItem 
        user={user}
      />
      <JoinForm />
    </Container>
  )
}

export default MyPage;