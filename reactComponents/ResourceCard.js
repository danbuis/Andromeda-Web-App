import React from 'react';
import BasicInfoTotal from './BasicInfoTotal';
import UsedIn from './UsedIn';
import css from '../CSS/app.css';

class ResourceCard extends React.Component {
    render() {
        const  Name  = this.props.resource.name
        const  Volume  = this.props.resource.volume
        const  Mass  = this.props.resource.mass
        const  Description  = this.props.resource.description
        
        return <div> 
            <div className ={css.cardButtons}>
                <form  action={"/resourceDelete/"+ Name} method="post">
                    <input  type="submit" value="Delete"></input>
                </form>
            </div>

            <BasicInfoTotal 
                name = {Name}
                volume = {Volume}
                mass = {Mass}
                description = {Description}
            />

            <UsedIn 
                item = {this.props.resource._id}
            />
            
            
        </div>;
    
    }
}

export default ResourceCard;