import React, {Component} from 'react';
import Axios from 'axios';
import UsedInPanel from './UsedInPanel'

//receives as props the item name
class UsedIn extends React.Component{
state = {
    alloys: [],
    components: []
}

componentDidMount(){
    Axios.get('http://localhost:3000/alloyUses/'+this.props.item)
        .then(res => {
            const alloys = res.data;
            this.setState({alloys})
        })
    
    Axios.get('http://localhost:3000/componentUses/'+this.props.item)
        .then(res => {
            const components = res.data;
            this.setState({components})
        })

}



render(){
    const components = null //this.getComponents();
   
    return (
    <div>
        <UsedInPanel 
            type = {"Alloys"}
            items = {this.state.alloys}
        />
        <UsedInPanel 
            type = {"Components"}
            items = {this.state.components}
        />
    </div>
    )
}

} export default UsedIn;