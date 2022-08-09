import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CategorySelectBox from '../elements/CategorySelectBox';
import { useState, useEffect } from "react";

const JoinForm = () => {

  const [companions, setCompanions] = useState([]);
  const companion = {
    name: '', gender: '', category: '',
  };

  const gender = [
    { label: '男性', value: 'men' },
    { label: '女性', value: 'women' },
  ]

  const categories = [
    { id: 1, label: '社会人' },
    { id: 2, label: '大学生' },
    { id: 3, label: '高校生以下' },
  ]

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography>参加フォーム</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="名前"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl sx={{ width: '50%' }}>
            <InputLabel>性別</InputLabel>
            <Select
              required
              name="gender"
              label="性別"
            >
              {gender.map(e => {
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
        <Grid item xs={6}>
          <CategorySelectBox />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="メールアドレス"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="備考"
            variant="outlined"
          />
        </Grid>
        {companions.map(e => {
          return (
            <>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="名前"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl sx={{ width: '50%' }}>
                  <InputLabel>性別</InputLabel>
                  <Select
                    required
                    name="gender"
                    label="性別"
                  >
                    {gender.map(e => {
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
              <Grid item xs={4}>
                <CategorySelectBox />
              </Grid>
            </>
          )
        })}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            onClick={() => {setCompanions(companions.concat(companion))}}
          >
            同伴者追加
						</Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
          >
            登録
						</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JoinForm;