import Container from '@mui/material/Container';
import SearchForm from '../forms/SearchForm';
import UserItem from '../components/UserItem'

const UserManagement = () => {
    return (
        <Container maxWidth={'lg'}>
            <SearchForm />
            <UserItem />
        </Container>
    )
}
export default UserManagement;