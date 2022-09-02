import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { useAxios } from '../utils/axiosUtil';
import { useParams } from "react-router-dom";

const Policy = () => {

  const [policy, setPolicy] = useState('');
  const axios = useAxios();
  const { type } = useParams();
  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/policy/' + type);
      setPolicy(result.data.content);
    }
    fetchDate();
  }, [type])

	return (
		<>
			<Typography><pre>{policy}</pre></Typography>
		</>
	)
}

export default Policy;