import EventDetailItem from '../components/EventDetailItem';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const EventDetail = () => {

  const navigate = useNavigate();

  return (
    <Container maxWidth={'lg'}>
      <EventDetailItem />
      <Box
        sx={{
          marginBottom: 1,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            m: 3
          }}
          onClick={() => { }}
        >
          参加者一覧
          </Button>
        <Button
          variant="outlined"
          sx={{
            m: 3
          }}
          onClick={() => { navigate('joinForm') }}
        >
          参加申し込み
          </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            m: 3
          }}
          onClick={() => { navigate('joinCancel') }}
        >
          参加キャンセル
          </Button>
        <Button
          variant="outlined"
          sx={{
            m: 3
          }}
          onClick={() => { }}
        >
          修正
          </Button>
        <Button
          variant="outlined"
          sx={{
            m: 3
          }}
          onClick={() => { navigate('eventSales') }}
        >
          売上入力
          </Button>
      </Box>
      <hr />
      <Outlet />
    </Container>
  )
}

export default EventDetail;