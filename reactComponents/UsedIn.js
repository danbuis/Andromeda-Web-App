import React, {Component} from 'react';
import Axios from 'axios';
import UsedInPanel from './UsedInPanel'

//receives as props the item name
class UsedIn extends React.Component{
state = {
    alloys: [],
    components: [],
    assemblies: []
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

buildResourcePanel(){
    return (
        <UsedInPanel 
        type = {"Alloys"}
        items = {this.state.alloys}
        />
        <UsedInPanel 
        type = {"Components"}
        items = {this.state.components}
        />
        <UsedInPanel 
        type = {"Assemblies"}
        items = {this.state.assemblies}
        />
    )
}

buildAlloyPanel(){
    return(
        <UsedInPanel 
        type = {"Components"}
        items = {this.state.components}
        />
        <UsedInPanel 
        type = {"Assemblies"}
        items = {this.state.assemblies}
        />
    )
}

buildAssemblyPanel(){
    return(
        <UsedInPanel 
        type = {"Assemblies"}
        items = {this.state.assemblies}
        />
    )
}

buildPanels(){
    if(this.props.rank == 0){
        return (
            this.buildResourcePanel()
        )
    }else if(this.props.rank == 3){
        return(
            this.buildAssemblyPanel()
        )
    }else return this.buildAlloyPanel()

}

render(){
       
    return (
    <div>
        {this.buildPanels()}
    </div>
    )
}

} export default UsedIn;