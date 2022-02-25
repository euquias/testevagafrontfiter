/* import './listar.css' */
import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="inicio">
        <div className='content'>
            <div className="card-container">
                <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>nome</h3>
                <h6>cargo</h6>
                <p>TI</p>
                <div className="buttons">
                    <button className="primary">
                        telefone
                    </button>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>
        </div>  
    </Main>