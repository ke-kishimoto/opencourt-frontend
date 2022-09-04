import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { userState, tokenState } from '../states/atoms/userAtom';
import { useResetRecoilState } from 'recoil';
import { useAxios } from '../utils/axiosUtil';

const UserMenu = (props) => {
  const navigate = useNavigate();
  const axios = useAxios();
  const resetUser = useResetRecoilState(userState);
  const resetToken = useResetRecoilState(tokenState);

  const logout = async () => {
    await axios.post('/logout');
    resetUser();
    resetToken();
  }
  
  return (
    <Menu
    anchorEl={props.anchorEl}
    id="account-menu"
    open={props.open}
    onClose={props.handleClose}
    onClick={props.handleClose}
  >
    <MenuItem
      onClick={() => navigate('/configManagement')}
      sx={{
        backgroundColor: "#ffb6c1",
      }}
    >
    システム設定
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/logManagement')}}
      sx={{
        backgroundColor: "#ffb6c1",
      }}
    >
      ログ管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/policyManagement')}}
      sx={{
        backgroundColor: "#ffb6c1",
      }}
    >
      ポリシー管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/UserCategory')}}
      sx={{
        backgroundColor: "#ffb6c1",
      }}
    >
      ユーザーカテゴリ管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/eventManagement')}}
      sx={{
        backgroundColor: "#6495ed",
      }}
    >
      イベント管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/userManagement')}
      sx={{
        backgroundColor: '#6495ed',
      }}
    >
      ユーザー管理
  </MenuItem>
    <MenuItem
      onClick={() => navigate('/templateManagement')}
      sx={{
        backgroundColor: '#6495ed',
      }}
    >
      テンプレート管理
  </MenuItem>
    <MenuItem
      onClick={() => navigate('/segmentDelivery')}
      sx={{
        backgroundColor: '#6495ed',
      }}
    >
      セグメント配信
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/salesManagement/monthly')}
      sx={{
        backgroundColor: '#6495ed',
      }}
    >
      売上管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/inquiryManagement')}
      sx={{
        backgroundColor: '#6495ed',
      }}
    >
      問い合わせ管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/newsManagement')}
      sx={{
        backgroundColor: '#6495ed',
      }}
    >
      お知らせ管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/mypage')}}
    >
      マイページ
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/bulkReservation')}
    >
      一括申し込み
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/inquiry')}
    >
      問い合わせ
    </MenuItem>
    <MenuItem
      onClick={() => {
        logout();
      }}
    >
    ログアウト
    </MenuItem>
  </Menu>
  )
}

export default UserMenu;