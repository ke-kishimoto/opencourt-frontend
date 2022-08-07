import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Top from './pages/Top';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import PasswordForget from './pages/PasswordForget';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import TemplateManagement from './pages/TemplateManagement';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/passwordForget" element={<PasswordForget />}></Route>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/userList" element={<UserList/>}></Route>
          <Route path="/userDetail" element={<UserDetail/>}></Route>
          <Route path="/templateManagement" element={<TemplateManagement/>}></Route>
          <Route path="/eventDetail/:id" element={<EventDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
