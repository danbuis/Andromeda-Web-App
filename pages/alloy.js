import React, {Component} from 'react';
import AlloyCard from '../reactComponents/AlloyCard'
import Header from '../reactComponents/Header'
import css from '../CSS/app.css'

export default class extends React.Component{
static async getInitialProps(alloy){
    return alloy.query;
}

render(){
    return (
        <div>
            <Header />
            <h1>{this.props.alloy.name}</h1>
            <h2>Alloy</h2>
            <AlloyCard alloy = {this.props.alloy}/>
        </div>
    )
}

}