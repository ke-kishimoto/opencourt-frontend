import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Top from './pages/Top';
import Login from './pages/Login';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Top />}></Route>
        <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
