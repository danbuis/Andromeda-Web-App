import React, {Component} from 'react';
import ResourceAdd from '../reactComponents/ResourceAdd'
import ItemTableList from '../reactComponents/ItemTableList'
import Header from '../reactComponents/Header'
import axios from 'axios';
import css from '../CSS/app.css'
import Link from 'next/link';

export default class extends Component{
    static async getInitialProps(){
        const res = await axios.get('http://localhost:3000/resourceList');
       // console.log(res);
        const resources = await res.data;
        
        return {resources}
    }

    constructor(props){
        super(props);
        this.state= {isOpen: false};
    }

    toggleWindow = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    tablebody = () => {
        console.log("inside tablebody")
        const rows = this.props.resources.map((info, index) => {

            return (
                <tr key={index}>
                    <td><Link href={"/item/"+info.name}>{info.name}</Link></td>
                    <td>{info.mass} kg</td>
                    <td>{info.volume} m<sup>3</sup></td>
                </tr>
            );
        });
        return <tbody>{rows}</tbody>
    }

    render() {
        return(
        <div>
            <Header />
        <h3>Resources</h3>
        
        <table>
            <thead>
                <tr>
                    <th>Resource</th>
                    <th>Mass</th>
                    <th>Volume</th>
                </tr>
            </thead>
            {this.tablebody()}
        </table>
        
        <ResourceAdd show = {this.state.isOpen}
          onClose = {this.toggleWindow}> 
          </ResourceAdd>

          <button onClick={this.toggleWindow}>New Resource</button>

        </div>
        )
    }
}
