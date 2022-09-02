import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RegisterBtn from '../elements/RegistBtn';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PolicyManagement = () => {

  const types = [
    { label: 'プライバシープリシー', value: 'privacy' },
    { label: 'キャンセルポリシー', value: 'cancel' },
  ]

  const axios = useAxios();
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/policy/' + type);
      setContent(result.data.content);
    }
    fetchDate();
  }, [type])

  const validation = () => {
    return true;
  }

	return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={5} margin={1}>
				<Grid item xs={12}>
					<Typography>ポリシー管理</Typography>
				</Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>タイプ</InputLabel>
            <Select
              required
              name={'type'}
              label="タイプ"
              onChange={(e) => setType(e.target.value)}
            >
              {types.map(e => {
                return (
                  <MenuItem
                    value={e.value}
                    key={e.value}
                  >
                    {e.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
				<Grid item xs={12}>
					<TextField
            id={'policy-content'}
						multiline
						rows={20}
						fullWidth
						label="ポリシー"
            variant="outlined"
            value={content}
            onChange={(e) => {setContent(e.target.value)}}
					/>
				</Grid>
				<Grid item xs={10}/>
				<Grid item xs={2}>
					<RegisterBtn
            mode={'new'}
            endpoint={'/policy'}
            validation={validation}
            data={{content: content, policy_type: type}}
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default PolicyManagement;