import './Nav.css'
import React from 'react'

export default props =>
<aside className='menu-area'>
<div className='menu'>
<a href="/">
        <i className='fa fa-users' ></i> Usuario
    </a>
    <a href="/user">
        <i className='fa fa-user' ></i> Novo
    </a>
</div>
</aside>