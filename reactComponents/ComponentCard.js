import React from 'react';
import IngredientTable from './IngredientTable';
import BasicInfoTotal from './BasicInfoTotal';
import css from '../CSS/app.css'

class ComponentCard extends React.Component {
    render() {
        const Name  = this.props.component.name;
        const Volume  = this.props.component.volume;
        const Mass  = this.props.component.mass;
        const Description  = this.props.component.description;
        const Ingredients = this.props.component.ingredients;
        const Quantities = this.props.component.quantities;
        const Types = this.props.component.types;


        return <div> 
            <div className = {css.cardButtons}>
                <form action={"/componentDelete/"+ this.props.component._id} method ="post">
                    <input type="submit" value="Delete"></input>
                </form>
            </div>

            <BasicInfoTotal 
                name = {Name}
                volume = {Volume}
                mass = {Mass}
                description = {Description}
            />
            
            <IngredientTable 
                ingredients = {Ingredients}
                quantities = {Quantities}
                types = {Types}
            />
            
        </div>;
    
    }
}

export default ComponentCard;