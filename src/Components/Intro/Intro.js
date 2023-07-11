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
                    <h1>Jeremy Lapham - Jr. Web Developer</h1>
                    <br />
                    <h3>Personally love to build in the Frontend using languages such as HTML, CSS, Javascript and Typescript and even using a framework such as React or Angular as a tool for building. I also build using Bootstrap with some knowledge of Tailwind CSS. I am capable to work in Backend using C# or Azure SQL Databases </h3>
                </Col>
            </Row>
        </>
    )
}
