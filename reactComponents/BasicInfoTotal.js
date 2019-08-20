import React from 'react';
import BasicInfoStats from './BasicInfoStats';
import BasicInfoDescription from './BasicInfoDescription';

class BasicInfoTotal extends React.Component{
    render(){
        return(
            <div>
                <BasicInfoStats 
                    name = {this.props.name}
                    volume = {this.props.volume}
                    mass = {this.props.mass}
                />
                <BasicInfoDescription 
                    description = {this.props.description}
                    output = {this.props.output}
                />
            </div>
        )
    }
}

export default BasicInfoTotal;