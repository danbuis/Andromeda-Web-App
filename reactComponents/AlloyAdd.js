import React from 'react';
import PropTypes from 'prop-types';

class AlloyAdd extends React.Component {

 

  state = {
    ingredients:[{name:"", quantity:""}]
  }

  addIngredient = (e) => {
    console.log("Adding ingredient")
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, {name:"", quantity:""}],
    }));
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    
    let {ingredients} = this.state
    return (
      
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div>
            <h3> New Alloy </h3>
            <form action="/newAlloy" method="post">
              <label>Name: </label>
              <input
                type="text"
                name="name"
              />
              <label>Mass: </label>
              <input
                type="text"
                name="mass"
              />
              <label>Volume: </label>
              <input
                type="text"
                name="volume"
              />
              <label>Description: </label>
              <input
                type="text"
                name="description"
              />
              
              
              {
                ingredients.map((ingred, index) =>{
                  return(
                    <div key={index}>
                      <label>Ingredient</label>
                      <select name="ingredient">
                        {this.props.resources.map(function(resource, index){
                          return <option value={resource.name}>{resource.name}</option>
                        })}
                      </select>
                      <label>Quantity</label>
                      <input type="text" name="quantity"/>

                    </div>
                  )
                })
              }
              <label>Output quantity</label>
              <input type="text" name="output"/>
              <input
              type="submit"
              value="Save Alloy"
              />
            </form>
          </div>
          <div className="footer">
          <button onClick={this.addIngredient}>Add new Ingredient</button>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

AlloyAdd.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default AlloyAdd;