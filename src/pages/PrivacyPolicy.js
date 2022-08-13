import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { useAxios } from '../utils/axiosUtil';

const PrivacyPolicy = () => {

  const [privacyPolicy, setPrivacyPolicy] = useState('');
  const axios = useAxios();
  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/privacyPolicy');
      setPrivacyPolicy(result.data.content);
    }
    fetchDate();
  }, [])

	return (
		<>
			<Typography><pre>{privacyPolicy}</pre></Typography>
		</>
	)
}

export default PrivacyPolicy;