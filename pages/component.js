import React, {Component} from 'react';
import ComponentCard from '../reactComponents/ComponentCard'
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
        <h1>{this.props.component.name}</h1>
        <h2>Component</h2>
        <ComponentCard component = {this.props.component}/>
    </div>
        )
}

}