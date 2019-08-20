import React, {Component} from 'react';
import ResourceCard from '../reactComponents/ResourceCard'
import Header from '../reactComponents/Header'
import css from '../CSS/app.css'

export default class extends React.Component{
static async getInitialProps(resource){
    return resource.query;
}

render(){
    return (
    <div>
        <Header />
        <h1>{this.props.resource.name}</h1>
        <h2>Resource</h2>
        <ResourceCard resource = {this.props.resource}/>
    </div>
    )
}

}