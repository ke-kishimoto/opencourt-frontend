import { Box } from '@mui/system';
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <Box
    sx={{
      marginTop: 5,
      borderTopStyle: 'solid',
      borderTopColor: 'black',
      borderTopWidth: 1,
      height: 150,
      }}
    >
      <Link to="/policy/privacy">プライバシーポリシー</Link><br />
      <Link to="/policy/cancel">キャンセルポリシー</Link>
    </Box>
  )

}

export default Footer;