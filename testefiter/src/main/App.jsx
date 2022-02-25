import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Listar from '../components/lista/Listar'


export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Listar />
        <Footer />
    </div>