import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RegisterBtn from '../elements/RegistBtn';

const ConfigManagement = () => {

  const axios = useAxios();

  const [config, setConfig] = useState({
    line_notify_flag: 'on',
    waiting_status_auto_update_flag: 'on',
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setConfig(
      { ...config, [name]: value }
    )
  }

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/config');
      setConfig(result.data);
    }
    fetchDate();
  }, [])

  return (
    <Container maxWidth={'lg'}>
      <Typography>{'システム設定'}</Typography>
			  <Grid container spacing={5} margin={1}>
          <Grid item xs={12}>
            <FormControl sx={{
              width: 400,
            }}>
              <InputLabel>LINE通知</InputLabel>
              <Select
                required
                name={'line_notify_flag'}
                label="LINE通知"
                onChange={handleChange}
                defaultValue={config.line_notify_flag}
              >
                <MenuItem value={'on'}>{'on'}</MenuItem>
                <MenuItem value={'off'}>{'off'}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{
              width: 400,
            }}>
              <InputLabel>キャンセル待ち自動繰り上がり</InputLabel>
              <Select
                required
                name={'waiting_status_auto_update_flag'}
                label="キャンセル待ち自動繰り上がり"
                onChange={handleChange}
                defaultValue={config.waiting_status_auto_update_flag}
              >
                <MenuItem value={'on'}>{'on'}</MenuItem>
                <MenuItem value={'off'}>{'off'}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <RegisterBtn 
              endpoint={'/config'}
              mode={'new'}
              data={config}
              validation={() => true}
            />
          </Grid>
        </Grid>
    </Container>
  )
}

export default ConfigManagement;