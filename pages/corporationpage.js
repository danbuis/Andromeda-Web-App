import React, {Component} from 'react';
import CorporationAdd from '../reactComponents/CorporationAdd'
import Header from '../reactComponents/Header'
import axios from 'axios';
import css from '../CSS/app.css'
import Link from 'next/link';

export default class extends Component{
    static async getInitialProps(){
        const corp = await axios.get('http://localhost:3000/corporationList');
       // console.log(res);
        const corporations = await corp.data;
        
        return {corporations}
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
        const rows = this.props.corporations.map((info, index) => {

            return (
                <tr key={index}>
                    <td><Link href={"/corporation/"+info.name}>{info.name}</Link></td>
                    <td>{info.specialty}</td>
                </tr>
            );
        });
        return <tbody>{rows}</tbody>
    }

    render() {
        return(
        <div>
            <Header />
        <h3>Corporations</h3>
        
        <table>
            <thead>
                <tr>
                    <th>Corporation</th>
                    <th>Specialty</th>
                </tr>
            </thead>
            {this.tablebody()}
        </table>
        
        <CorporationAdd show = {this.state.isOpen}
          onClose = {this.toggleWindow}> 
          </CorporationAdd>

          <button onClick={this.toggleWindow}>New Corporation</button>

        </div>
        )
    }
}
