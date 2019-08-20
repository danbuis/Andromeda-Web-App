import React from 'react';
import IngredientTable from './IngredientTable';
import BasicInfoTotal from './BasicInfoTotal';
import UsedIn from './UsedIn';
import css from '../CSS/app.css';

class AlloyCard extends React.Component {
    render() {
        const Name  = this.props.alloy.name;
        const Volume  = this.props.alloy.volume;
        const Mass  = this.props.alloy.mass;
        const Description  = this.props.alloy.description;
        const Ingredients = this.props.alloy.ingredients;
        const Quantities = this.props.alloy.quantities;
        const Output = this.props.alloy.output;
        var Types = this.props.alloy.types;

        if(!Types){
            console.log("inside bool 2")
            Types = new Array(Ingredients.length).fill("Resource")
        }

            return <div> 
                <div className ={css.cardButtons}>
                    <form action={"/alloyDelete/"+ Name} method="post">
                        <input type="submit" value="Delete"></input>
                    </form>
                </div>

                <BasicInfoTotal 
                    name = {Name}
                    volume = {Volume}
                    mass = {Mass}
                    description = {Description}
                    output = {Output}
                />

                <IngredientTable
                    ingredients = {Ingredients}
                    types = {Types}
                    quantities = {Quantities}
                />

                <UsedIn 
                    item = {Name}
                 />
        </div>;
    
    }
}

export default AlloyCard;