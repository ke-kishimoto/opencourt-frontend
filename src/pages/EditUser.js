import UserForm from '../forms/UserForm';
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';

const EditUser = () => {

  const user = useRecoilValue(getUser);

  console.log(user)

  return (
    <UserForm 
      user={user}
      mode={'update'}
    />
  )
}

export default EditUser;