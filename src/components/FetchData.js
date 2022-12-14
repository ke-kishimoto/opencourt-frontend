import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAxios } from '../utils/axiosUtil';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FetchData = (props) => {

  const navigate = useNavigate();
  const axios = useAxios();
  const [progressOpen, setProgressOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setProgressOpen(true);
      const result = await axios.get(props.endpoint + '/' + props.id);
      props.setData(result.data);
      setProgressOpen(false);
      if(!result.data) {
        navigate('/error')
      }
    };
    if (props.id !== 'new') fetchData();
  }, []);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={progressOpen}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default FetchData;