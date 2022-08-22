import Container from '@mui/material/Container';
import SearchForm from '../forms/SearchForm';

const InquiryManagement = () => {
  return (
    <Container maxWidth={'lg'}
    sx={{
      minHeight: 650,
    }}
    >
      <SearchForm />
    </Container>
  )
}

export default InquiryManagement;