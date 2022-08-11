import { useState, useEffect } from 'react';
import UserItem from '../components/UserItem';

const UserItemList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {id:1, name: 'AAA', gender_name: '男性', category_name: '社会人'},
      {id:1, name: 'BBB', gender_name: '女性', category_name: '大学生'},
      {id:1, name: 'CCC', gender_name: '男性', category_name: '高校生'},
    ])
  }, [])
  return (
    <>
     {users.map(e => {
      return (
        <UserItem user={e} />
      )
    })}
    </>
  )
}

export default UserItemList;