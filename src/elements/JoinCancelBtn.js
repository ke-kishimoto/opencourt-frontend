import { useState } from 'react';
import { useAxios } from '../utils/axiosUtil';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import RegisterDialog from './RegisterDialog';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CustomizedSnackbars from './CustomizedSnackbarsSnackbar';

const JoinCancelBtn = () => {

  const { id } = useParams();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [progressOpen, setProgressOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');

  const axios = useAxios();

  const onDelete = () => {
    setDialogOpen(true)
  }

  const handleSubmit = () => {
    setDialogOpen(false)
    setProgressOpen(true)
    axios.delete('/eventUser/' + id)
      .then(res => {
        setSeverity('success')
        setMessage('キャンセルが完了しました。')
        setSnackbarOpen(true);
      }).catch(error => {
        setSeverity('error')
        setMessage('キャンセルに失敗しました。')
        setSnackbarOpen(true);
      }
      ).finally(() => setProgressOpen(false))
  }

  return (
    <>
      <Button
        margin="normal"
        variant="contained"
        color="error"
        sx={{ m: 2 }}
        onClick={onDelete}
      >
        キャンセル
      </Button>
      <RegisterDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        handleSubmit={handleSubmit}
        modeName={'キャンセル'}
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

export default JoinCancelBtn;