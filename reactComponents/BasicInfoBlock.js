import React from 'react';
import css from '../CSS/app.css'

class BasicInfoBlock extends React.Component{
    render(){
        return(
            <div>
                <p>Volume: {this.props.volume} cubic meters</p>
                <p>Mass: {this.props.mass} kg</p>
            </div>
        )
    }
}

export default BasicInfoBlock;