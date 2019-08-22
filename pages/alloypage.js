import React, {Component} from 'react';
import AlloyAdd from '../reactComponents/AlloyAdd'
import ItemTableList from '../reactComponents/ItemTableList'
import Header from '../reactComponents/Header'
import axios from 'axios';
import css from '../CSS/app.css'
import Link from 'next/link';

export default class extends Component{
    static async getInitialProps(){
        const all = await axios.get('http://localhost:3000/alloyList');
       // console.log(res);
        const alloys = await all.data;
        
        const res = await axios.get('http://localhost:3000/resourceList');
        // console.log(res);
         const resources = await res.data;
        return {alloys, resources}
    }

    constructor(props){
        super(props);
        this.state= {isOpen: false};
    }

    toggleWindow = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    sum(total, num) {
        return total+num
    }

    tablebody = props => {
        //console.log("inside tablebody")
        const rows = this.props.alloys.map((info, index) => {

            return (
                <tr key={index}>
                    <td><Link href={"/item/"+info.name}>{info.name}</Link></td>
                    <td>{info.mass} kg</td>
                    <td>{info.volume} m<sup>3</sup></td>
                    <td>{info.quantities.reduce(this.sum)}</td>
                    <td>{info.output}</td>
                </tr>
            );
        });
        return <tbody>{rows}</tbody>
    }

    render() {
        return(
        <div>
            <Header />
        <h3>Alloys</h3>
       

        <table>
           
        <thead>
                <tr>
                    <th>Resource</th>
                    <th>Mass</th>
                    <th>Volume</th>
                    <th>Input Quantity</th>
                    <th>Output Quantity</th>
                </tr>
            </thead>
            {this.tablebody()}
        </table>
        <AlloyAdd show = {this.state.isOpen}
          onClose = {this.toggleWindow}
          resources = {this.props.resources}> 
          </AlloyAdd>

          <button onClick={this.toggleWindow}>New Alloy</button>
        </div>
        )
    }
}
