import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Intro() {
    return (
        <>
            <Row>
                <Col className='d-flex justify-content-center mt-5'>
                </Col>
            </Row>
            <Row className='meWithsum'>
                <Col lg={12} className='topTxt d-flex justify-content-center'>
                    <h1>Jeremy Lapham - Frontend Web Developer</h1>
                    <br />
                    <h3>Jr. Web Developer. I love to build in the Frontend using languages like HTML, CSS, Javascript and Typescript and even using a framework such as React as a tool for building. I also build using Bootstrap and have some knowledge of Tailwind css. I am capable to work in Backend using C# or SQL but I am not as proficient as I am as Frontend. </h3>
                </Col>
            </Row>
        </>
    )
}
