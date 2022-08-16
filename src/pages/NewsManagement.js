import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const NewsManagement = () => {

  const axios = useAxios();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getAllNews');
      setNews(result.data);
    }
    fetchData();
  }, [])

  return (
    <Container maxWidth={'lg'}
      sx={{
        minHeight: 650
      }}
    >
			<Grid container spacing={2} >
        <Grid item xs={12}>
        <Button
          variant="outlined"
          onClick={() => navigate('/newNews')}
				>
					新規登録
				</Button>
        </Grid>
        {news.map(e => {
          return (
            <Grid item xs={12}
              key={e.id}
            >
              <Link to="/">
                {e.title} {e.created_at}
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default NewsManagement;