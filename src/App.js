import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import LogInPage from './components/LogInPage';
import Register from './components/Register';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllClinics from './components/doctor/AllClinics';
import NewClinic from './components/doctor/NewClinic';
import AllPatients from './components/doctor/AllPatients';
import UpdatePage from './components/UpdatePage';
import Appointments from './components/reception/Appointments';
import NewAppointments from './components/reception/NewAppointments';
import PatientUpdate from './components/PatientUpdate';
import PendingAppointment from './components/reception/PendingAppointment';
import CompleteApointment from './components/reception/CompleteApointment';

function App() {
  return (
    <>
  
  <BrowserRouter>
<Header />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/services' element={<Services />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/login' element={<LogInPage />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/allClinics' element={<AllClinics />}/>
    <Route path='/newClinics' element={<NewClinic />}/>
    <Route path='/allPatients' element={<AllPatients />}/>
    <Route path='/updatePage/:id' element={<UpdatePage />}/>
    <Route path='/patientUpdate/:id' element={<PatientUpdate />}/>
    <Route path='/newAppointment' element={<NewAppointments />}/>
    <Route path='/appointments' element={<Appointments />}/>
    <Route path='/pendingAppointment' element={<PendingAppointment />}/>
    <Route path='/completeApointment' element={<CompleteApointment />}/>

  </Routes>
  <Footer/>
</BrowserRouter>
    </>
  );
}

export default App;
