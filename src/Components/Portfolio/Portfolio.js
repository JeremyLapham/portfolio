import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { Button, Col, Container, Dropdown, Modal, Nav, NavDropdown, Navbar, Offcanvas, Row, DropdownButton, ButtonGroup } from 'react-bootstrap';
import resume from '../../assets/Jeremy Resume-1.png';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { BiNews } from 'react-icons/bi';
import Aboutme from '../AboutMe/Aboutme';
import MyProjects from '../MyProjects/MyProjects';
import MySkills from '../MySkills/MySkills';
import Intro from '../Intro/Intro';


export default function Portfolio() {

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const parallaxBg = document.querySelector('.parallax-bg');
            if (parallaxBg) {
                parallaxBg.style.transform = `translateZ(-1px) translateY(${scrollY}px)`;
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
                <Modal.Header closeButton></Modal.Header>
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
                <Container>
                    <Navbar.Brand href="#jeremy">Jeremy Lapham</Navbar.Brand>
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
                                <Nav.Link onClick={handleShow} target='_blank'><BiNews size={35} color='white' /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Intro />
            <MySkills />
            <MyProjects />
            <Aboutme />
            <Navbar collapseOnSelect variant='dark' className='myNav' bg="dark" expand='lg'>
                <Container>
                    <Navbar.Brand href="#jeremy">JeremyLapham</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Jeremy Lapham
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
                                <Nav.Link onClick={handleShow} target='_blank'><BiNews size={35} color='white' /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className='parallax-bg'></div>
        </Container>
    )
}
