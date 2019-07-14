import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';

export default class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.hendleSubmit = this.hendleSubmit.bind(this);
    }
    hendleSubmit(event){
        event.preventDefault();
        this.props.updateStadia();
    }
    render(){
        return(
            <Container fluid={true}>
                <Row className="mt-3">
                    <Col className="mt-3">
                        <h1 className="h3">Проверка аффилиатов на одном адресе регистрации</h1>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form inline >
                            <FormControl type="text" placeholder="Введите интересующий адрес" className="mr-sm-2" />
                            <Button onClick={this.hendleSubmit} variant="outline-success">Поиск</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}