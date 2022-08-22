import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Outlet } from "react-router-dom";

const SalesManagement = () => {

  return (
    <Container
    sx={{
      minHeight: 650,
    }}
    >
      <Typography>売上管理</Typography>
      <Outlet />
    </Container>
  )
}

export default SalesManagement;