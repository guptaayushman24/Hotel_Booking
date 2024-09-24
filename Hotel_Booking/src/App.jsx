
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
// const router = createBrowserRouter(
//   [
//     {
//       path:'/signup', 
//       element:
    
//     <div>
//         <Signup></Signup>
//       </div>
//     }
//   ]
// )
function App() {
 

  return (
    <>
  
    <Signup></Signup>
     {/* <Home></Home> */}
     {/* <Login></Login> */}
     {/* <div>
      <RouterProvider router={router}></RouterProvider>
    </div> */}
    </>
  )
}

export default App
