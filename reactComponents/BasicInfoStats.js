import React from 'react';
import css from '../CSS/app.css'
import BasicInfoBlock from './BasicInfoBlock'

class BasicInfoStats extends React.Component{
    render(){
        return(
            <div className={css.infoColumnLeft}>
                <div>
                    <BasicInfoBlock 
                        volume = {this.props.volume}
                        mass = {this.props.mass}
                    />
                    
                </div>
            </div>
        )
    }
}

export default BasicInfoStats;