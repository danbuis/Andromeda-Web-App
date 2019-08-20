import React, {Component} from 'react';


class UsedInPanel extends React.Component{
//receives as props the type of item, and a 
//json list of type to be displayed

buildRows(){
    console.log(this.props.items)
    if(this.props.items.length==0) return (<p>none</p>)
        const rows = this.props.items.map((info, index) => {
            return (
                
                    <li>{info.name}</li>
              
            );
        });
        return <ul>{rows}</ul>
}

render(){
    return (
        <div>
            <h3>{this.props.type} using this item</h3>
            {this.buildRows()}
        </div>
        )
    }

} export default UsedInPanel;