import {Routes,Route} from 'react-router-dom';
import Auth from './pages/Authentication/Auth';
import Home from './pages/Home/Home'; 
function AllRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Auth' element={<Auth/>} />
    </Routes>
  )
}

export default AllRoute