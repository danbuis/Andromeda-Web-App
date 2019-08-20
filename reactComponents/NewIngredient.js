import React from 'react';



class NewIngredient extends React.Component {
    state = {
        type: "Resource"
    }

    handleTypeChange(event){
        const newType = event.target.value
        //this.changeItems(newType)
        this.setState({
            type: newType
        })
    }

    populateDropDown(){
        if (this.state.type === "Resource"){
            return this.props.resources.map(function(resource, index){
                return <option key={index} value={resource.name}>{resource.name}</option>
              })
        }
        if (this.state.type === "Alloy"){
            return this.props.alloys.map(function(alloy, index){
                return <option key={index} value={alloy.name}>{alloy.name}</option>
              })
        }
        if (this.state.type === "Component"){
            return this.props.components.map(function(component, index){
                return <option key={index} value={component.name}>{component.name}</option>
              })
        }
    }

    

    render() {
        return(
            <div>
                <label>Type</label>
                <select name="type" onChange={(e) => this.handleTypeChange(e)}>
                    <option selected="selected" 
                            value ="Resource">Resource</option>
                    <option value ="Alloy">Alloy</option>
                    <option value ="Component">Component</option>
                    <option value ="Assembly">Assembly</option>
                </select>
                
                <label>Ingredient</label>
                <select name="ingredient">{this.populateDropDown()}</select>
                
                <label>Quantity</label>
                <input type="text" name="quantity"/>
                    
            </div>
        )
    
    }
}

export default NewIngredient;