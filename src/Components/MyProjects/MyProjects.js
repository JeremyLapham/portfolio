import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pokemonAPI from '../../assets/pokeMon.png';
import RememberWhen from '../../assets/rememberwhen.png';
import advice from '../../assets/advice.png';
import { SiCsharp, SiReact, SiJavascript, SiTypescript, SiBootstrap } from 'react-icons/si';
import { BsServer } from 'react-icons/bs';
import './MyProjects.css';

export default function MyProjects() {
    return (
        <Row id='myProjects' className='project'>
            <Col lg={12} xs={12}>
                <h1 className='myProjects'>My Projects</h1>
            </Col>
            <Col className='d-flex justify-content-center'>
                <aside className="profile-card">
                    <header>
                        <img src={pokemonAPI} />
                        <h1 style={{ color: 'black' }}>Pokemon API</h1>

                        <h2 style={{ color: 'black' }}>React | Javascript | Bootstrap</h2>
                    </header>

                    <div className="profile-bio">
                        <p>A rebuilt project in React Javascript using Bootstrap. This website offers extensive data on pokemon that are searched or randomly generated. This website uses the free Pokemon API to get said data to be pulled and displayed in a informational way.</p>
                        <div className='pokeIcon'>
                            <SiReact size={50} color='#264de4' />
                            <SiJavascript size={50} color='#F0DB4F' />
                            <SiBootstrap size={50} color='#563d7c' />
                        </div>
                        <a className='button' href='https://reactpokemon-api.azurewebsites.net' target='_blank' rel='noopener noreferrer'>Check it out!</a>
                    </div>
                </aside>
            </Col>
            <Col className='d-flex justify-content-center'>
                <aside className="profile-card2">
                    <header>
                        <img src={RememberWhen} />
                        <h1 style={{ color: 'black' }}>Remember When</h1>

                        <h2 style={{ color: 'black' }}>React | Typescript | Bootstrap | C# | SQL</h2>
                    </header>

                    <div className="profile-bio2">
                        <p>A fullstack project made with a team using C#,SQL for our Backend as well as React Typescript with Bootstrap for our Frontend. This website allows users to create and login to an account and then the user can make folders and put memories into the folders for the user to view at any time.</p>
                        <div className='pokeIcon'>
                            <SiReact size={50} color='#264de4' />
                            <SiTypescript size={50} color='#007acc' />
                            <SiBootstrap size={50} color='#563d7c' />
                            <SiCsharp size={50} color='green' style={{ border: '1px solid white', borderRadius: '100px', backgroundColor: 'white' }}  />
                            <BsServer size={50} color='#f29111' />
                        </div>
                        <a className='button' href='https://rememberwhen.azurewebsites.net' target='_blank' rel='noopener noreferrer'>Check it out!</a>
                    </div>
                </aside>
            </Col>
            <Col className='d-flex justify-content-center'>
                <aside className="profile-card3">
                    <header>
                        <img src={advice} />
                        <h1 style={{ color: 'black' }}>Advice Generator </h1>

                        <h2 style={{ color: 'black' }}>React | Javascript | Bootstrap</h2>
                    </header>

                    <div className="profile-bio3">
                        <p>A fully responsive and small two day sprint project made in React using Javascript and Bootstrap. Project involved using the <a href='https://api.adviceslip.com' target='_blank'>advice generator api</a> and we were given a few pictures as reference to build the project. Had to get as close as we could to the exact prototype we were given. But with mine I did a small UX change because of how the api works</p>
                        <div className='pokeIcon'>
                            <SiReact size={50} color='#264de4' />
                            <SiJavascript size={50} color='#F0DB4F' />
                            <SiBootstrap size={50} color='#563d7c' />
                        </div>
                        <a className='button' href='https://jeremysadvicegen.azurewebsites.net' target='_blank' rel='noopener noreferrer'>Check it out!</a>
                    </div>
                </aside>
            </Col>
        </Row>
    )
}
