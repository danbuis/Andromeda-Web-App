import React from 'react';
import css from '../CSS/app.css';

class CorporationCard extends React.Component {
    render() {
        const Name  = this.props.corp.name
        const Description  = this.props.corp.description
        const Specialty = this.props.corp.specialty
        
        return <div> 
            <h1>{Name}</h1> 
            <h3>{Specialty}</h3>
            <p> {Description}</p>
        </div>;
    }
}

export default CorporationCard;