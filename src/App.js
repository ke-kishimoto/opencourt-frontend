import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './pages/Top';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import PasswordForget from './pages/PasswordForget';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserManagement from './pages/UserManagement';
import UserDetail from './pages/UserDetail';
import EventTemplateManagement from './pages/EventTemplateManagement';
import NewEventTemplate from './pages/NewEventTemplate';
import EditEventTemplate from './pages/EditEventTemplate';
import EventDetail from './pages/EventDetail';
import PrivacyPolicyManagement from './pages/PrivacyPolicyMnagement';
import LogManagement from './pages/LogManagement';
import UserCategory from './pages/UserCategory';
import SegmentDelivery from './pages/SegmentDelivery';
import EventSales from './components/EventSales';
import JoinCancelForm from './forms/JoinCancelForm';
import JoinForm from './forms/JoinForm';
import EventJoinerList from './components/EventJoinerList';
import EventManagement from './pages/EventManagement';
import NewEvent from './pages/NewEvent';
import Inquiry from './pages/Inquiry';
import InquiryManagement from './pages/InquiryManagement';
import BulkReservation from './pages/BulkReservation';
import SalesManagement from './pages/SalesManagement';
import MonthlySalesManagement from './components/MonthlySlaesManagement';
import YearSalesTotal from './components/YearSalesTotal';
import AllSales from './components/AllSales';
import MyPage from './pages/MyPage';
import EventEditForm from './forms/EventEditForm';
import NewsManagement from './pages/NewsManagement';
import NewNews from './pages/NewNews';
import EventUserManagement from './components/EventUserManagement';
import LineLogin from './pages/LineLogin';
import Error from './pages/Error';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/index" element={<Top />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/passwordForget" element={<PasswordForget />}></Route>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/userManagement" element={<UserManagement/>}></Route>
          <Route path="/userDetail/:id" element={<UserDetail/>}></Route>
          <Route path="/templateManagement" element={<EventTemplateManagement/>}></Route>
          <Route path="/newEventTemplate" element={<NewEventTemplate/>}></Route>
          <Route path="/eventTemplate/:id" element={<EditEventTemplate/>}></Route>
          <Route path="/segmentDelivery" element={<SegmentDelivery/>}></Route>
          <Route path="/privacyPolicyManagement" element={<PrivacyPolicyManagement/>}></Route>
          <Route path="/logManagement" element={<LogManagement/>}></Route>
          <Route path="/userCategory" element={<UserCategory/>}></Route>
          <Route path="/eventManagement" element={<EventManagement/>}></Route>
          <Route path="/newEvent" element={<NewEvent/>}></Route>
          <Route path="/inquiry" element={<Inquiry/>}></Route>
          <Route path="/inquiryManagement" element={<InquiryManagement/>}></Route>
          <Route path="/bulkReservation" element={<BulkReservation/>}></Route>
          <Route path="/eventDetail/:id" element={<EventDetail/>}>
            <Route path="eventSales" element={<EventSales/>}></Route>
            <Route path="joinCancel" element={<JoinCancelForm/>}></Route>
            <Route path="joinForm" element={<JoinForm/>}></Route>
            <Route path="userList" element={<EventJoinerList/>}></Route>
            <Route path="eventEdit" element={<EventEditForm/>}></Route>
            <Route path="eventUserManagement" element={<EventUserManagement/>}></Route>
          </Route>
          <Route path="/salesManagement" element={<SalesManagement/>}>
            <Route path="monthly" element={<MonthlySalesManagement/>}></Route>
            <Route path="yearSalesTotal" element={<YearSalesTotal/>}></Route>
            <Route path="all" element={<AllSales/>}></Route>
          </Route>
          <Route path="newsManagement" element={<NewsManagement/>}></Route>
          <Route path="newNews" element={<NewNews/>}></Route>
          <Route path="lineLogin" element={<LineLogin/>}></Route>
          <Route path="error" element={<Error/>}></Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
