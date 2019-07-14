import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';
import GrafBox from './GrafBox';

export default class MapPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            stadia: 'search'
        };
        this.updateStadia = this.updateStadia.bind(this);
    }

    updateStadia(){
        console.log('sadas');
        if(this.state.stadia !== 'result'){
            this.setState({stadia: 'result'});
        }
        
    }

    componentDidUpdate(){
        console.log(this.state.stadia);
    }

    render(){

        switch(this.state.stadia){
            case 'search':
                return (
                    <SearchComponent updateStadia={this.updateStadia}  key="searchcomponent"/>
                );
            case 'result':
                return [
                    <SearchComponent updateStadia={this.updateStadia} key="searchcomponent"/>,
                    <Row className="mt-3" key="resultBox">
                        <ListComponent key="listcomponent"/>
                        <GrafBox key="grafBox"/>
                    </Row>
                ];

        }
        
    }
}