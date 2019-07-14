import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';

export default class GrafBox extends Component{
    render(){
        return(
            <div className="col-6">
                <h2>Схема в графах</h2>
                <h3>Лица содержащиеся в состеве учредителей юрю лиц отобраных по признаку "Регистрация на одном адресе"</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Лицо</th>
                            <th>ИНН лица</th>
                            <th>Спикок юр. лиц</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Людое Алёна Владимировна</td>
                            <td>2729029012 (инн физ. лица для дальнейшего поиска)</td>
                            <td>
                                <p>ООО "Люди нашей планеты (лицо имеющие право подписи), ООО "Классно может быть"</p>
                                <p>ООО "Классно может быть"</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
    