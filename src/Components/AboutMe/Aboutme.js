import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import './Aboutme.css';
import flex from '../../assets/flex.jpg';
import field from '../../assets/field.jpg';
import grad from '../../assets/grad.jpg';
import formal from '../../assets/meFormal.jpg';
import liftingGuy from '../../assets/liftingGuy.jpg';
import pinningGuy from '../../assets/pinningGuy.jpg';
import me from '../../assets/meWithGirlfriend.jpg';
import win from '../../assets/win.jpg';
import jeremyFull from '../../assets/jeremy.jpg';

export default function Aboutme() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Row id='aboutMe' className=''>
            <Modal className='modalMe' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>About Me!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className=''>Hello, I am Jeremy Lapham. I have been a wrestler for over 10 years but now I am a powerlifter and bodybuilder who now has found a career in software engineering. I have had an extensive career in wrestling having done it almost my whole life. I have gone to masters my Freshman, Sophomore years of high school and because of COVID and health issues I wasn't able to wrestle my Junior, Senior year. But now I have become a powerlifter/bodybuilder and have done a few competitions for powerlifting and have taken home many medals. I now really want to do bodybuilding competitions for fun and to see how well I can do.</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col lg={12} xs={12} className='d-flex justify-content-center'>
                    <section id="slideshow">
                        <div className="entire-content">
                            <div className="content-carrousel">
                                <figure className="shadow"><img src={jeremyFull} alt="Jeremy lapham profession picture" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
                                <figure className="shadow"><img src={flex} alt="Me at my first powerlifting competition" border="0" w="800&h=449&auto=compress&cs=tinysrgb" /></figure>
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
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button className='aboutMeBtn' variant="" onClick={handleShow}>
                        Learn a little about me!
                    </Button>
                </Col>
            </Row>
        </Row>
    )
}