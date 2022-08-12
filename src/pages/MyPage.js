import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinForm from '../components/JoinEvents';

const MyPage = () => {
  return (
    <Container>
      <UserDetailItem />
      <JoinForm />
    </Container>
  )
}

export default MyPage;