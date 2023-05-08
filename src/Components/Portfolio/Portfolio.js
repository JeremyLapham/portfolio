import React, { useState } from 'react';
import './Portfolio.css';
import { Button, Card, Col, Container, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import jeremy from '../../assets/JEREMY.png';
import jeremyFull from '../../assets/jeremy.jpg';
import pokemonAPI from '../../assets/pokeMon.png';
import RememberWhen from '../../assets/rememberwhen.png';
import flex from '../../assets/flex.jpg';
import field from '../../assets/field.jpg';
import grad from '../../assets/grad.jpg';
import formal from '../../assets/meFormal.jpg';
import liftingGuy from '../../assets/liftingGuy.jpg';
import pinningGuy from '../../assets/pinningGuy.jpg';
import me from '../../assets/meWithGirlfriend.jpg';
import win from '../../assets/win.jpg';
import resume from '../../assets/Jeremy Resume-1.png';
import 'boxicons'
import { SiCsharp, SiHtml5, SiCss3, SiReact, SiJavascript, SiTypescript, SiBootstrap, SiSlack, SiJira, SiPostman, SiNotion } from 'react-icons/si';
import { BsServer } from 'react-icons/bs';


export default function Portfolio() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className='bg'>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Resume!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-center'><img className='resume' src={resume} /></Modal.Body>
                <Modal.Footer>
                    <a href='/documents/Jeremy%20Resume.pdf' download> Download resume</a>
                </Modal.Footer>
            </Modal>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Jeremy</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About Me</Nav.Link>
                        <Nav.Link href="#features">My Projects</Nav.Link>
                        <Nav.Link href="#pricing">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Row className='topBG'>
                <Row className='meWithsum'>
                    <Col lg={8} className='d-flex flex-column justify-content-center topTxt'>
                        <h1>Jeremy Lapham - Frontend Web Developer</h1>
                        <h3>Jr. Web Developer. I love to build in the Frontend using languages like HTML, CSS, Javascript and Typescript and even using a framework such as React as a tool for building. I also build using Bootstrap and have some knowledge of Tailwind css. I am capable to work in Backend using C# or SQL but I am not as proficient as I am as Frontend. </h3>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <Row>
                            <Col>
                                <img src={jeremy} className='meImg' />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className='resumeBtn' variant="success" onClick={handleShow}>
                                    My Resume
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <h2>Langauges and Frameworks</h2>
                        <div className='fadeAnimation'>
                            <SiCsharp size={50} color='green' style={{ border: '1px solid white', borderRadius: '100px', backgroundColor: 'white' }} className='icon' />
                            <SiHtml5 size={50} color='#e34c26' className='icon' />
                            <SiCss3 size={50} color='#264de4' className='icon' />
                            <SiReact size={50} color='#264de4' className='icon' />
                            <SiJavascript size={50} color='#F0DB4F' className='icon' />
                            <SiTypescript size={50} color='#007acc' className='icon' />
                            <SiBootstrap size={50} color='#563d7c' className='icon' />
                            <BsServer size={50} color='#f29111' className='icon' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='productivity'>
                        <h2>Productivity</h2>
                        <div className='fadeAnimation'>
                            <SiSlack size={50} color='#E01E5A' className='icon' />
                            <SiJira size={50} color='#0052CC' className='icon' />
                            <SiPostman size={50} color='#EF5b25' className='icon' />
                            <SiNotion size={50} color='black' className='icon' />
                        </div>
                    </Col>
                </Row>
            </Row>
            <Row className='aboutMeSection'>
                <Col>
                    <h1 className='text-center'>About Me</h1>
                    <Row>
                        <Col lg={6} className='d-flex align-items-center '>
                            <h4 className='about'>Hello, I am Jeremy Lapham. I have been a wrestler for over 10 years but now I am a powerlifter and bodybuilder who now has found a career in software engineering. I have had an extentsive career in wrestling having done it almost my whole life. I have gone to masters my Freshman, Sophmore years of high school and because of COVID and health issues I wasn't able to wrestle my Junior, Senior year. But now I have become a powerlifter/bodybuilder and have done a few competitions for powerlifting and have taken home many medals. I now really want to do bodybuilding competitions for fun and to see how well I can do.</h4>
                        </Col>
                        <Col lg={6} xs={12} className='d-flex justify-content-center'>
                            <section id="slideshow">
                                <div className="entire-content">
                                    <div className="content-carrousel">
                                        <figure className="shadow"><img src={jeremyFull} alt="Jeremy lapham prefession picture" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={flex} alt="Me at my first powerlifting competion" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={field} alt="Posing in a field" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={grad} alt="Graduation pictures" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={pinningGuy} alt="Me pinning a guy at a tournament" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={formal} alt="Formal pictures with my beautiful girlfriend" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={liftingGuy} alt="Me lifting a guy at a dual meet" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={me} alt="Me lifting a guy at a dual meet" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                        <figure className="shadow"><img src={win} alt="Me lifting a guy at a dual meet" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                    </div>
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={12}>
                    <h1 className='text-center'>My Projects</h1>
                </Col>
                <aside class="profile-card">
                    <header>
                            <img src={pokemonAPI} />
                        <h1 style={{color:'black'}}>Pokemon API</h1>

                        <h2 style={{color:'black'}}>Startup Cofounder | Comic Enthusiast | Jedi Master</h2>
                    </header>

                    <div class="profile-bio">
                        <p>Raj is a startup cofounder, full stack developer, comic enthusiast and aspiring Jedi Master. He is best known for his early backend contributions to Snapchat (Formerly Pic-a-Boo) and cofounding Novvum, a mobile application development startup in Costa Mesa, CA.</p>
                    </div>

                    <ul class="profile-social-links">
                        <li>
                            <a href="https://twitter.com/rajinwonderland">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
                            </a>
                        </li>

                        <li>
                            <a href="http://themeforest.net/user/Bluminethemes">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
                            </a>
                        </li>

                        <li>
                            <a href="https://codepen.io/rajinwonderland/">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
                            </a>
                        </li>

                    </ul>
                </aside>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '30rem' }} className='cards'>
                        <Card.Img className='cardImg' variant="top" src={pokemonAPI} />
                        <Card.Body className='card'>
                            <Card.Title><strong>Pokemon API</strong></Card.Title>
                            <Card.Text>
                                A rebuilt project in React Javacript using Bootstrap. This website offers extensive data on pokemon that are searched or randomly generated. This website uses the free Pokemon API to get said data to be pulled and displayed in a informational way.
                            </Card.Text>
                            <a className='button' href='https://reactpokemon-api.azurewebsites.net' target='_blank' rel='noopener noreferrer'>Check it out!</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card style={{ width: '30rem' }} className='cards'>
                        <Card.Img className='cardImg' variant="top" src={RememberWhen} />
                        <Card.Body className='card'>
                            <Card.Title><strong>Remember When</strong></Card.Title>
                            <Card.Text>
                                A fullstack project made with a team using C#,SQL for our Backend as well as React Typescript with Bootstrap for our Frontend. This website allows users to create and login to an account and then the user can make folders and put memories into the folders for the user to view at any time.
                            </Card.Text>
                            <a className='button' href='https://remember-when.azurewebsites.net' target='_blank' rel='noopener noreferrer'>Check it out!</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='footer'>
                <Col>
                    <h1 className='text-center'>Contact Me!</h1>
                    <h4>jeremylapham2004@gmail.com</h4>
                    <h4>(209)-753-9899</h4>
                    <a href='https://github.com/JeremyLapham' target='_blank' className='github'><box-icon type='logo' name='github' size='lg'></box-icon><h3>github.com/JeremyLapham</h3></a>
                    <a href='https://www.linkedin.com/in/jeremylapham/' target='_blank' className='github'><box-icon type='logo' name='linkedin' size='lg'></box-icon><h3>linkedin.com/in/jeremylapham/</h3></a>
                </Col>
            </Row>
        </Container>
    )
}
