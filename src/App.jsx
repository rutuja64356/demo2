
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddmissionPage from './pages/AddmissionPage';
import CoursePage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
const App = () => {
   return(
   <Router>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
      <Route path="/AboutPage" element={<AboutPage/>}/>
      <Route path="/Courses" element={<CoursePage/>}/>
      <Route path="/ContactUs" element={<ContactPage/>}/>
      <Route path="/AddmissionPage" element={<AddmissionPage/>}/>

    </Routes>
    <ChatbotComponent />
   </Router>

   )
  
}
export default App