import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import RegisterBtn from '../elements/RegistBtn';

const ChangeRole = (props) => {

  const [role, setRole] = useState(props.role);

  const roles = [
    { label: 'システム管理者', value: 'system_admin' },
    { label: 'イベント管理者', value: 'event_admin' },
    { label: '一般ユーザー', value: 'general' },
  ]

  return (
    <Grid item xs={4}>
      <FormControl sx={{
        width: 200,
      }}>
        <InputLabel>権限</InputLabel>
        <Select
          required
          name={'role_revel'}
          label="権限"
          defaultValue={props.role === undefined ? '' : props.role}
          onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }}
        >
         {roles.map(e => {
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
        endpoint={'role'}
        validation={() => true}
        data={{role_level: role, id: props.id}}
      />
    </Grid>
  )
}

export default ChangeRole;