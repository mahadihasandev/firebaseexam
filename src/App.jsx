
import Ragistration from './Ragistration'
import Login from './Login'
import Home from './Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path='/' element={<Ragistration/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    
    
    </>
  )
);

function App() {
  

  return (
    <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    
  )
}

export default App
