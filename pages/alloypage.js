import React, {Component} from 'react';
import AlloyAdd from '../reactComponents/AlloyAdd'
import ItemTableList from '../reactComponents/ItemTableList'
import Header from '../reactComponents/Header'
import axios from 'axios';
import css from '../CSS/app.css'

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

    tablebody = props => {
        //console.log("inside tablebody")
        const rows = this.props.alloys.map((info, index) => {

            return (
                <tr key={index}>
                    <td><Link href="/item/{info.name}">{info.name}</Link>{info.name}</td>
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
           
            <ItemTableList items = {this.props.alloys}/>
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
