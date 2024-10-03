
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
import Newfile from './components/newfile'
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
  
    {/* <Signup></Signup> */}
     {/* <Home></Home> */}
     {/* <Login></Login> */}
     {/* <div> */}
      {/* <RouterProvider router={router}></RouterProvider> */}
     <Rooms></Rooms> 
       {/* <Filter_data></Filter_data> */}
       {/* <Newfile/> */}
    {/* </div> */}
    </>
  )
}

export default App
