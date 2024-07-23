import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'

export default function () {
  return (
     <div>
       <HeaderComponent/>

       <BrowserRouter>

        <div className="container">
            <Routes>
                 <Route exact path='/' element={<ListEmployeeComponent/>}></Route>
                 <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
                 <Route path='/add-employees' element={<CreateEmployeeComponent/>}></Route>
                 <Route path='/update-employees/:id' element={<UpdateEmployeeComponent/>}></Route>
            </Routes>
          
        </div>

        </BrowserRouter>

       <FooterComponent/> 
     </div>
  )
}
