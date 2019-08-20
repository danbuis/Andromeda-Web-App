import React from 'react';
import IngredientTableBody from './IngredientTableBody';
import css from '../CSS/app.css'

class IngredientTable extends React.Component{
        render(){
            return (
                <div className={css.infoColumnLeft}>
                    <h3>Ingredients to Create</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Type</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <IngredientTableBody 
                        ingredients = {this.props.ingredients}
                        quantities = {this.props.quantities}
                        types = {this.props.types}/>
                    </table>
                </div>
            )
        
    }
    
}

export default IngredientTable;