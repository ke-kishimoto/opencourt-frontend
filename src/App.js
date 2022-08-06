import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Top from './pages/Top';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import PasswordForget from './pages/PasswordForget';

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
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
