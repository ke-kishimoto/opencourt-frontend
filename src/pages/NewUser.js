import UserForm from '../forms/UserForm';

const NewUser = () => {

  const userInit = {
    name1: '',
    gender1: '',
    user_category_id1: '',
    email: '',
    password: '',
    rePassword: '',
    description: '',
  }

	return (
    <UserForm 
      user={userInit}
      mode={'new'}
    />
	)
}

export default NewUser;