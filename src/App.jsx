
import {BrowserRouter as Router , Routers , Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
import AddmissionPage from './pages/AddmissionPage';
const App = () => {
   return(
   <Router>
    <Routers>
     <Route path="/Homepage" element={<HomePage/>}/>
      <Route path="/AboutPage" element={<AboutPage/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/AddmissionPage" element={<AddmissionPage/>}/>
    </Routers>
   </Router>

   )
  
}
export default App