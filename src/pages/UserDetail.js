import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinForm from '../components/JoinEvents';

const UserDetail = () => {
	return (
    <Container maxWidth={'lg'}>
      <UserDetailItem />
      <JoinForm />
    </Container>
	)
}

export default UserDetail;