import Container from '@mui/material/Container';
import SearchForm from '../forms/SearchForm';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const EventManagement = () => {

	const navigate = useNavigate();

  return (
    <Container maxWidth={'lg'}>
      <SearchForm />
      <Button
        variant="outlined"
        onClick={() => { navigate('/newEvent') }}
      >
      新規登録
      </Button>
    </Container>
  )

}

export default EventManagement;