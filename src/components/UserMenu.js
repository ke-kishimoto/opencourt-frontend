import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { isLoginState } from '../states/selectors/userSelector';

const UserMenu = (props) => {
	const navigate = useNavigate();
  
  return (
    <Menu
    anchorEl={props.anchorEl}
    id="account-menu"
    open={props.open}
    onClose={props.handleClose}
    onClick={props.handleClose}
  >
    <MenuItem
      onClick={() => {navigate('/mypage')}}
    >
      マイページ
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/privacyPolicyManagement')}}
    >
      プライバシーポリシー管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/logManagement')}}
    >
      ログ管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/UserCategory')}}
    >
      ユーザーカテゴリ管理
    </MenuItem>
    <MenuItem
      onClick={() => {navigate('/eventManagement')}}
    >
      イベント管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/userManagement')}
    >
      ユーザー管理
  </MenuItem>
    <MenuItem
      onClick={() => navigate('/templateManagement')}
    >
      テンプレート管理
  </MenuItem>
    <MenuItem
      onClick={() => navigate('/segmentDelivery')}
    >
      セグメント配信
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/salesManagement/monthly')}
    >
      売上管理
    </MenuItem>
    <MenuItem
      onClick={() => navigate('/inquiryManagement')}
    >
      問い合わせ管理
    </MenuItem>
    <MenuItem>お知らせ管理</MenuItem>
    <MenuItem>システム設定</MenuItem>
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
    <MenuItem>ログアウト</MenuItem>
  </Menu>
  )
}

export default UserMenu;