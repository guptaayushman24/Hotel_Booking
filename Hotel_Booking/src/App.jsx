
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import NavBar from './components/Navbar'
import Filter_data from './components/Filter_Data'
import OtherFacility from './components/OtherFacility'
import Newcomponent from './components/Newcomponent'
import UserProvider  from './Context/Context'
import RoomViewFilter from './components/RoomViewFilter'
import Hotel_Booking from './components/Hotel_Booking'
import Allrooms from './components/All_rooms'
import Order_History from './components/Order_History'
import Blog from './components/Blog'
import SeeBlog from './components/SeeBlog'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Services from './components/Services'
import Contact_Us from './components/Contact_Us'
import Reset_Password from './components/Reset_Password'


function App() {
 

  return (
    <>

      <UserProvider>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
           <Route path='/signup' element={<Signup/>}></Route>
           <Route path='/signin' element={<Login/>}></Route>
          <Route path='/rooms' element={<Rooms/>}></Route>
          <Route path='/bookingpage' element={<Hotel_Booking/>}></Route>
          <Route path='/orderhistory' element={<Order_History/>}></Route>
          <Route path='/postblog' element={<Blog/>}></Route>
          <Route path='/seeallblog' element={<SeeBlog/>}></Route>
          <Route path='/roomservice' element={<Services/>}></Route>
          <Route path='/contactus' element={<Contact_Us/>}></Route> 
           <Route path='/resetpassword' element={<Reset_Password/>}></Route>
          
        </Routes>
      </BrowserRouter>
      
      </UserProvider>
      
      
     
    </>
  )
}

export default App
