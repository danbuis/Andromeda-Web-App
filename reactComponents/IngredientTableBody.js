import React from 'react';

class IngredientTableBody extends React.Component{
        
        render(){
            if(!this.props.ingredients) return null

            const rows = this.props.ingredients.map((item, index) => { 
                return (
                    <tr key={index}>
                      <td>{this.props.ingredients[index]}</td>
                      <td>{this.props.types[index] || "Resource"}</td>
                      <td>{this.props.quantities[index]}</td>
                      
                    </tr>
                  );
                });
                return <tbody>{rows}</tbody>;
        
    }
    
}

export default IngredientTableBody;