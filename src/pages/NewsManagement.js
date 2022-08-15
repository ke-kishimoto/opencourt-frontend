import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const NewsManagement = () => {

  const navigate = useNavigate();

  return (
    <Container maxWidth={'lg'}
      sx={{
        minHeight: 650
      }}
    >
			<Grid container spacing={2} >
        <Grid item sx={12}>
        <Button
          variant="outlined"
          onClick={() => navigate('/newNews')}
				>
					新規登録
				</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NewsManagement;