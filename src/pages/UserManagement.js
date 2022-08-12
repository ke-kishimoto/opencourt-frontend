import Container from '@mui/material/Container';
import SearchForm from '../forms/SearchForm';
import UserItemList from '../components/UserItemList';
import Button from '@mui/material/Button';

const UserManagement = () => {
    return (
        <Container maxWidth={'lg'}>
            <SearchForm />
            <Button
  						variant="outlined"
	  				>
						新規登録
            </Button>
            <UserItemList />
        </Container>
    )
}
export default UserManagement;