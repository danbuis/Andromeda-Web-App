import React from 'react';
import css from '../CSS/app.css'

class BasicInfoDescription extends React.Component{

    checkOutput(){
        if(this.props.output){
            return (
                <p><b>Output: </b>{this.props.output} units</p>
            )
        }
    }

    render(){
        return(
        <div className={css.infoColumnRight}>
            <h2>Description</h2>
            <p>{this.props.description}</p>

            {this.checkOutput()}
        </div>
        )
    }
}

export default BasicInfoDescription;