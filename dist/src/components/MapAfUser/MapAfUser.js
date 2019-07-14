import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './style.css';
import graf from '../../img/graf1.jpg'



export default class MapAfUser extends Component{
    constructor(props){
        super(props);
        
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
                    </Col>
                </Row>
                <Row className="mt-3">
                    <div className="col-4 border-right border-bottom pb-3 border-top">
                    <h2 className="mt-3">Данные лиц для анализа</h2>
                    <p>Загрузите данные лиц для анализа.</p>
                <p>Шаблон для заполнениея - <a href="https://sourse.xakplant.ru/h/1407/schemaDataUser.xlsx">скачать</a></p>
                    <Form className="mt-3">
                        <p>Загрузите файлы с данными должностных лиц заказчика гос. закупки</p>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Выберите файл</label>
                        </div>
                        <p className="mt-3">Загрузите файлы с данными должностных лиц заказчика гос. закупки</p>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Выберите файл</label>
                        </div>
                    </Form>
                    </div>
                    <div className="col-6">
                        <h2>Схема в графах</h2>
                        <Row className="g-graphic">
                            <Col><img width="100%" height="auto" src={graf}/> </Col>
                            
                        </Row>
                    </div>
                </Row>
            </Container>
        )
    }
}

