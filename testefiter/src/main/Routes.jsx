import React from "react";
import { Routes,Route } from 'react-router-dom'

 import Listar from "../components/lista/Listar";
import Usercrud from "../components/user/Usercrud" 

export default props =>
     <Routes>
        <Route exact path='/' element={<Listar / >} />
        <Route exact path='/user' element={<Usercrud /> } />
        <Route from='*' element={<Listar /> } />
    </Routes> 