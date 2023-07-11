import React from 'react';
import '../Portfolio/Portfolio.css';
import { Col, Row } from 'react-bootstrap';
import { SiCsharp, SiHtml5, SiCss3, SiReact, SiJavascript, SiTypescript, SiBootstrap, SiSlack, SiJira, SiPostman, SiNotion, SiDiagramsdotnet, SiMicrosoftazure, SiTrello, SiFigma, SiGithub } from 'react-icons/si';
import { BsServer } from 'react-icons/bs';

export default function MySkills() {
    return (
        <Row className='fadeAnimation'>
            <Col className='iconSpacing'>
                <h1 className='SkillTxt'>Languages/Frameworks</h1>
                <Row>
                    <Col className='alignIcons'>
                        <SiReact size={50} color='#264de4' />
                        <p className='iconTxt'>React</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiJavascript size={50} color='#F0DB4F'/>
                        <p className='iconTxt'>Javascript</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiReact size={50} color='#264de4'/>
                        <p className='iconTxt'>React Native</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='alignIcons'>
                        <SiHtml5 size={50} color='#e34c26' />
                        <p className='iconTxt'>HTML</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiCss3 size={50} color='#264de4' />
                        <p className='iconTxt'>CSS</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiBootstrap size={50} color='#563d7c'/>
                        <p className='iconTxt'>Bootstrap</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='alignIcons'>
                        <SiCsharp size={50} color='green' />
                        <p className='iconTxt'>C Sharp</p>
                    </Col>
                    <Col className='alignIcons'>
                        <BsServer size={50} color='#f29111'/>
                        <p className='iconTxt'>SQL</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiTypescript size={50} color='#007acc' />
                        <p className='iconTxt'>Typescript</p>
                    </Col>
                </Row>
            </Col>
            <Col className='iconSpacing'>
                <h1 className='SkillTxt'>Production</h1>
                <Row>
                    <Col className='alignIcons'>
                        <SiSlack size={50} color='#E01E5A'/>
                        <p className='iconTxt'>Slack</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiJira size={50} color='#0052CC' />
                        <p className='iconTxt'>Jira</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiTrello size={50} color='#007ac0'/>
                        <p className='iconTxt'>Trello</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='alignIcons'>
                        <SiNotion size={50} color='white' />
                        <p className='iconTxt'>Notion</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiMicrosoftazure size={50} color='#008AD7' />
                        <p className='iconTxt'>Azure</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiFigma size={50} color='white'/>
                        <p className='iconTxt'>Figma</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='alignIcons'>
                        <SiPostman size={50} color='#EF5b25'/>
                        <p className='iconTxt'>Postman</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiDiagramsdotnet size={50} color='#d05c17' />
                        <p className='iconTxt'>Draw.io</p>
                    </Col>
                    <Col className='alignIcons'>
                        <SiGithub size={50} color='white' />
                        <p className='iconTxt'>Github</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
