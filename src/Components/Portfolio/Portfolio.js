import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { Button, Col, Container, Dropdown, Modal, Nav, NavDropdown, Navbar, Offcanvas, Row, DropdownButton, ButtonGroup } from 'react-bootstrap';
import jeremy from '../../assets/JEREMY.png';
import resume from '../../assets/Jeremy Resume-1.png';
import { SiCsharp, SiHtml5, SiCss3, SiReact, SiJavascript, SiTypescript, SiBootstrap, SiSlack, SiJira, SiPostman, SiNotion, SiGithub, SiLinkedin, SiMicrosoftazure, SiTrello, SiFigma } from 'react-icons/si';
import { BsServer } from 'react-icons/bs';
import Aboutme from '../AboutMe/Aboutme';
import MyProjects from '../MyProjects/MyProjects';


export default function Portfolio() {

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const parallaxBg = document.querySelector('.parallax-bg');
            if (parallaxBg) {
                parallaxBg.style.transform = `translateZ(-1px) translateY(${scrollY * 1}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className='bg'>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Resume!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-center'>
                    <a href={resume} target='_blank'>
                        <img className='resume' src={resume} />
                    </a>
                </Modal.Body>
                <Modal.Footer>
                    <a href={resume} target='_blank'>Open in new tab</a>
                </Modal.Footer>
            </Modal>
            <Navbar collapseOnSelect variant='dark' className='myNav' bg="dark" expand='lg'>
                <Container fluid>
                    <Navbar.Brand href="#jeremy">JeremyLapham</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                JeremyLapham
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavDropdown title="Contacts" id="navbarScrollingDropdown">
                                    <NavDropdown.Item>jeremylapham2004@gmail.com</NavDropdown.Item>
                                    <NavDropdown.Item>(209)-753-9899</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#aboutMe" className='navWords'>About Me</Nav.Link>
                                <Nav.Link href="#myProjects" className='navWords'>My Projects</Nav.Link>
                                <Nav.Link href='https://github.com/JeremyLapham' target='_blank' ><SiGithub size={30} color='#f5f5f5' /></Nav.Link>
                                <Nav.Link href='https://www.linkedin.com/in/jeremylapham/' target='_blank'><SiLinkedin size={30} color='#0077b5' /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Row>
                <Col className='d-flex justify-content-center mt-5'>
                    <img src={jeremy} className='meImg' />
                </Col>
            </Row>
            <Row className='meWithsum'>
                <Col lg={12} className='topTxt d-flex justify-content-center'>
                    <h1>Jeremy Lapham - Frontend Web Developer</h1>
                    <h3>Jr. Web Developer. I love to build in the Frontend using languages like HTML, CSS, Javascript and Typescript and even using a framework such as React as a tool for building. I also build using Bootstrap and have some knowledge of Tailwind css. I am capable to work in Backend using C# or SQL but I am not as proficient as I am as Frontend. </h3>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button size='lg' className='resumeBtn' variant="success" onClick={handleShow}>
                        My Resume
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className='aboveIcontxt'>
                    <h2 className='skillsTxt'>All Skills</h2>
                </Col>
            </Row>
            <Row>
                <div className='fadeAnimation myIcons'>
                    <Col>
                        <SiCsharp size={50} color='green' className='cSharp' />
                    </Col>
                    <Col>
                        <SiHtml5 size={50} color='#e34c26' className='icon' />
                    </Col>
                    <Col>
                        <SiCss3 size={50} color='#264de4' className='icon' />
                    </Col>
                    <Col>
                        <SiReact size={50} color='#264de4' className='icon' />
                    </Col>
                    <Col>
                        <SiJavascript size={50} color='#F0DB4F' className='icon' />
                    </Col>
                    <Col>
                        <SiTypescript size={50} color='#007acc' className='icon' />
                    </Col>
                    <Col>
                        <SiBootstrap size={50} color='#563d7c' className='icon' />
                    </Col>
                    <Col>
                        <BsServer size={50} color='#f29111' className='icon' />
                    </Col>
                    <Col>
                        <SiSlack size={50} color='#E01E5A' className='icon' />
                    </Col>
                    <Col>
                        <SiJira size={50} color='#0052CC' className='icon' />
                    </Col>
                    <Col>
                        <SiTrello size={50} color='#007ac0' className='icon' />
                    </Col>
                    <Col>
                        <SiPostman size={50} color='#EF5b25' className='icon' />
                    </Col>
                    <Col>
                        <SiMicrosoftazure size={50} color='#008AD7' className='icon' />
                    </Col>
                    <Col>
                        <SiFigma size={50} color='white' className='icon' />
                    </Col>
                    <Col>
                        <SiNotion size={50} color='white' className='icon' />
                    </Col>
                </div>
            </Row>
            <MyProjects />
            <Aboutme />
            <Navbar collapseOnSelect variant='dark' className='myNav' bg="dark" expand='lg'>
                <Container fluid>
                    <Navbar.Brand href="#jeremy">JeremyLapham</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                JeremyLapham
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <div className="mb-2">
                                    <DropdownButton as={ButtonGroup} id={`dropdown-button-drop-up`} drop="up" variant="dark" title={` Contacts `} >
                                        <Dropdown.Item>jeremylapham2004@gmail.com</Dropdown.Item>
                                        <Dropdown.Item>(209)-753-9899</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <Nav.Link href="#aboutMe" className='navWords'>About Me</Nav.Link>
                                <Nav.Link href="#myProjects" className='navWords'>My Projects</Nav.Link>
                                <Nav.Link href='https://github.com/JeremyLapham' target='_blank' ><SiGithub size={30} color='#f5f5f5' /></Nav.Link>
                                <Nav.Link href='https://www.linkedin.com/in/jeremylapham/' target='_blank'><SiLinkedin size={30} color='#0077b5' /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className='parallax-bg'></div>
        </Container>
    )
}
