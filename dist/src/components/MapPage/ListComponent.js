import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';

export default class ListComponent extends Component{
    render(){
        return(
            <div className="col-4 border-right border-bottom pb-3 border-top">
                <Card className="col mt-2">
            <Card.Body>
                <Card.Title>ООО "Люди нашей планеты"</Card.Title>
                <Card.Text>
                    <p><b>ИНН:</b> 2729029036 / <b>ОГРН:</b> 2729029036</p>
                </Card.Text>
                <Card.Text>
                    <h6>Учредители и лица имеющие право подписи</h6>
                    <p>Крыськин Олег Владимирович</p>
                    <hr/>
                    <p>Людое Алёна Владимировна</p>
                    <hr/>
                    <p>Нечистых Геннадий Александрович</p>
                    <hr/>
                </Card.Text>
            </Card.Body>
        </Card>
            <Card className="col mt-2">
             <Card.Body>
                    <Card.Title>ООО "Классно может быть"</Card.Title>
                    <Card.Text>
                        <p><b>ИНН:</b> 2729029012 / <b>ОГРН:</b> 2729029076</p>
                    </Card.Text>
                    <Card.Text>
                        <h6>Учредители и лица имеющие право подписи</h6>
                        <p>Людое Алёна Владимировна</p>
                        <hr/>
                </Card.Text>
            </Card.Body>
        </Card>
            </div>
        )
    }

}


