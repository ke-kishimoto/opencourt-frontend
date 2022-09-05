import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FetchData from '../components/FetchData';
import RegisterBtn from '../elements/RegistBtn';
import DeleteBtn from '../elements/DeleteBtn';
import { useState } from 'react';
import { useParams } from "react-router-dom";

const InquiryDetail = () => {

  const [inquiry, setInquiry] = useState({
    user:{}
  })
  const { id } = useParams();

  return (
    <Container maxWidth={'lg'}
      sx={{
        minHeight: 650,
      }}
    >
      <FetchData 
        endpoint={'/inquiry'}
        id={id}
        setData={setInquiry}
      />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>問い合わせ詳細</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>ユーザー名：{inquiry.user.name}</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>メールアドレス：{inquiry.user.email}</Typography>
        </Grid>
        <Grid item xs={12}>
          件名：{inquiry.title}
        </Grid>
        <Grid item xs={12}>
          内容：{inquiry.content}
        </Grid>
        <Grid item xs={4}>
          対応状況：{inquiry.status_name}
        </Grid>
        <Grid item xs={4}>
          <RegisterBtn
            mode={'update'}
            endpoint={'/updateInquiryStatus'}
            data={{id: id}}
            validation={() => true}
            label={'更新状況対応'}
            forward={'/inquiryManagement'}
          />
        </Grid>
        <Grid item xs={4}>
          <DeleteBtn
            endpoint={'/inquiry'}
            id={id}
            forward={'/inquiryManagement'}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default InquiryDetail;