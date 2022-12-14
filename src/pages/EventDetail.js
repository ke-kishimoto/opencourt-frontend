import EventDetailItem from '../components/EventDetailItem';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import { useRecoilValue } from 'recoil';
import { isAdminState } from '../states/selectors/userSelector';

const EventDetail = () => {

  const axios = useAxios();
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const isAdmin = useRecoilValue(isAdminState);

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/event/' + id);
      setEvent(result.data);
    }
    fetchDate();
  }, [])

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
          onClick={() => { navigate('userList') }}
        >
          参加者一覧
          </Button>
        <Button
          variant="outlined"
          sx={{
            m: 3,
            display: `${event.status === 'end' ? 'none' : 'inline-flex'}`,
          }}
          onClick={() => { navigate('joinForm') }}
        >
          参加申し込み
          </Button>
        <Button
          variant="outlined"
          sx={{
            m: 3,
            display: `${event.status === 'end' ? 'none' : 'inline-flex'}`,
          }}
          onClick={() => { navigate('joinCancel') }}
        >
          参加キャンセル
          </Button>
          <Button
          variant="outlined"
          color="secondary"
          sx={{
            m: 3,
            display: `${isAdmin ? 'inline-flex' : 'none' }`,
          }}
          onClick={() => { navigate('eventUserManagement') }}
        >
          ユーザー管理
          </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            m: 3,
            display: `${isAdmin ? 'inline-flex' : 'none' }`,
          }}
          onClick={() => { navigate('eventEdit') }}
        >
          修正
          </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            m: 3,
            display: `${isAdmin ? 'inline-flex' : 'none' }`,
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