import React from 'react';
import Axios from 'axios';

class IngredientTableBody extends React.Component{
        constructor(props){
          super(props);
          this.state = {IDs : this.props.ingredients,
                      ingredients : []
                      }

          this.populateIngredients();
        }

        async populateIngredients(){

          const getName = async str =>{
            console.log("Looking up "+str)
            const item = await Axios.get('http://localhost:3000/getItemByID/'+str);
            const itemName = item.data.name
            return await itemName
          }

          const names = await Promise.all(this.state.IDs.map(str => getName(str)))
          this.setState({
            ingredients: names
          })
        }

        render(){
            if(!this.props.ingredients) return null

            const rows = this.props.ingredients.map((item, index) => { 
                return (
                    <tr key={index}>
                      <td>{this.state.ingredients[index]}</td>
                      <td>{this.props.types[index] || "Resource"}</td>
                      <td>{this.props.quantities[index]}</td>
                      
                    </tr>
                  );
                });
                return <tbody>{rows}</tbody>;
        
    }
    
}

export default IngredientTableBody;