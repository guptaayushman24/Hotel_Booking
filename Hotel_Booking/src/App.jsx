
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
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
import Newfile from './components/Newfile'
import Newcomponent from './components/Newcomponent'
import UserProvider  from './Context/Context'
import RoomViewFilter from './components/RoomViewFilter'
import Displayallrooms from './components/Displayallrooms'
import Hotel_Booking from './components/Hotel_Booking'
import {BrowserRouter, Routes,Route} from "react-router-dom"
const router = createBrowserRouter(
  
  [ 
  
    {
   
      path:'/', 
    
      element:
       
      <Home></Home>
    },
    {
      path:'/signup', 
      element:
        <Signup></Signup>
    },
    {
      path:'/signin',
      element:
      <Login></Login>
    }
  ]
)
function App() {
 

  return (
    <>

      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Rooms/>}></Route>
          <Route path='/bookingpage' element={<Hotel_Booking/>}></Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
      {/* <UserProvider>
      <Hotel_Booking></Hotel_Booking>
      </UserProvider> */}
    </>
  )
}

export default App
