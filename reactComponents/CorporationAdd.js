import React from 'react';
import PropTypes from 'prop-types';

class CorporationAdd extends React.Component {
  submit(){
    console.log("submitted!")
    
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

    

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div>
            <h3> New Corporation </h3>
            <form action="/newCorporation" method="post">
              <label>Name: </label>
              <input
                type="text"
                name="name"
              />
              <label>Specialty: </label>
              <input
                type="text"
                name="specialty"
              />
              <label>Description: </label>
              <input
                type="text"
                name="description"
              />
              <input
              type="submit"
              value="Save Corporation"
              />
            </form>
          </div>
          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CorporationAdd.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default CorporationAdd;