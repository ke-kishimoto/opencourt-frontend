import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import RegisterBtn from '../elements/RegistBtn';

const ChangeStatus = (props) => {

  const [status, setStatus] = useState(props.role);

  const statuss = [
    { label: '有効', value: 'active' },
    { label: 'ブラックリスト', value: 'blacklist' },
  ]

  return (
    <Grid item xs={4}>
      <FormControl sx={{
        width: 200,
      }}>
        <InputLabel>ステータス</InputLabel>
        <Select
          required
          name={'role_revel'}
          label="ステータス"
          defaultValue={props.status === undefined ? '' : props.status}
          onChange={(e) => {
            setStatus(e.target.value)
          }}
        >
         {statuss.map(e => {
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
      <RegisterBtn 
        mode={'update'}
        endpoint={'status'}
        validation={() => true}
        data={{status: status, id: props.id}}
      />
    </Grid>
  )
}
export default ChangeStatus;