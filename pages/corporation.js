import React, {Component} from 'react';
import CorporationCard from '../reactComponents/CorporationCard'
import Header from '../reactComponents/Header'
import css from '../CSS/app.css'

export default class extends React.Component{
static async getInitialProps(component){
    return component.query;
}

render(){
    return (
    <div>
        <Header />
        <CorporationCard corp = {this.props.corporation}/>
    </div>
        )
    }

}