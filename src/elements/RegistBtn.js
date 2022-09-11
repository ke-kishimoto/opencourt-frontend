import { useState } from 'react';
import { useAxios } from '../utils/axiosUtil';
import Button from '@mui/material/Button';
import RegisterDialog from './RegisterDialog';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CustomizedSnackbars from './CustomizedSnackbarsSnackbar';
import { useNavigate } from 'react-router-dom';

const RegisterBtn = (props) => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [progressOpen, setProgressOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');

  const axios = useAxios();
  const navigate = useNavigate();

  const onRegister = () => {
    if (!props.validation()) {
      return;
    }
    setDialogOpen(true)
  }
  const method = props.mode === 'new' ? axios.post : axios.put;

  const handleSubmit = () => {
    setDialogOpen(false)
    setProgressOpen(true)
    method(props.endpoint, {
      ...props.data
    }).then(res => {
      if(res.status === 200) {
        
        setSeverity('success')
        setMessage(`${props.mode === 'new' ? '登録' : '更新'}完了しました。`)
        setSnackbarOpen(true);
        if(props.forward !== undefined && props.forward !== '') {
          navigate(props.forward)
        }
      } 
    }).catch(error => {
      setSeverity('error')
      let msg = `${props.mode === 'new' ? '登録' : '更新'}に失敗しました。`
      if(error.response !== undefined && error.response.status === 422) {
        Object.keys(error.response.data.errors).forEach(key => {
          msg += '\n' + error.response.data.errors[key]
        })
        
      }
      setMessage(msg)
      setSnackbarOpen(true);
    }
    ).finally(() => setProgressOpen(false))
  }

  return (
    <>
      <Button
        id="register-btn"
        margin="normal"
        variant="contained"
        color="secondary"
        sx={{ m: 2 }}
        onClick={onRegister}
      >
        {props.label === undefined ? (props.mode === 'new' ? '登録' : '更新') : props.label}
      </Button>
      <RegisterDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={handleSubmit}
        modeName={props.mode === 'new' ? '登録' : '更新'}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={progressOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CustomizedSnackbars
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        severity={severity}
        message={message}
      />
    </>
  )
}

export default RegisterBtn;