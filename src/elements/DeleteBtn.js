import { useState } from 'react';
import { useAxios } from '../utils/axiosUtil';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import RegisterDialog from './RegisterDialog';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CustomizedSnackbars from './CustomizedSnackbarsSnackbar';

const DeleteBtn = (props) => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [progressOpen, setProgressOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');

  const axios = useAxios();
  const navigate = useNavigate();

  const onDelete = () => {
    if(!props.id && !props.data) {
      return;
    }
    setDialogOpen(true)
  }

  const handleSubmit = () => {
    setDialogOpen(false)
    setProgressOpen(true)
    axios.delete(props.endpoint + '/' + props.id, {
      data:{...props.data}
    })
      .then(res => {
        setSeverity('success')
        setMessage(`${props.label === undefined ? '削除' : props.label}が完了しました。`)
        if(props.forward !== undefined && props.forward !== '') {
          navigate(props.forward)
        }
        setSnackbarOpen(true);
      }).catch(error => {
        setSeverity('error')
        setMessage(`${props.label === undefined ? '削除' : props.label}に失敗しました。`)
        setSnackbarOpen(true);
      }
      ).finally(() => setProgressOpen(false))
  }

  return (
    <>
      <Button
        id="delete-btn"
        margin="normal"
        variant="contained"
        color="error"
        sx={{ m: 2 }}
        onClick={onDelete}
      >
        {props.label === undefined ? '削除' : props.label}
      </Button>
      <RegisterDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={handleSubmit}
        modeName={'削除'}
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

export default DeleteBtn;