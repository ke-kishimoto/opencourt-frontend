import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RegisterBtn from '../elements/RegistBtn';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const PrivacyPolicyManagement = () => {

  const axios = useAxios();
  const [content, setContent] = useState('');
  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/privacyPolicy');
      setContent(result.data.content);
    }
    fetchDate();
  }, [])

  const validation = () => {
    return true;
  }

	return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={5} margin={1}>
				<Grid item xs={12}>
					<Typography>プライバシーポリシー管理</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						multiline
						rows={20}
						fullWidth
						label="プライバシーポリシー"
            variant="outlined"
            value={content}
            onChange={(e) => {setContent(e.target.value)}}
					/>
				</Grid>
				<Grid item xs={10}/>
				<Grid item xs={2}>
					<RegisterBtn
            mode={'new'}
            endpoint={'/privacyPolicy'}
            validation={validation}
            data={{content: content}}
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default PrivacyPolicyManagement;