import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import BasicUserItem from '../components/BasicUserItem'

const BasicUserList = () => {

  const [users, setUsers] = useState([]);
  const { id } = useParams();

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
        <BasicUserItem user={e} />
      )
    })}
    </>
  )

}

export default BasicUserList;