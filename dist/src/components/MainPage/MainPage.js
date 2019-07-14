import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default class MainPage extends Component{
    render(){
        return(
            <Container fluid={true}>
                <Row>
                    <Col className="mt-3">
                        <h1 className="h3">Система проверки прозрачности закупокупочной деятельности</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}