import React, { Component } from 'react';

class Abilities extends Component {

  render() {
    let Hp = this.props.hp !== undefined && this.props.hp !== 'None' ? this.props.hp >= 100 ? 100 : this.props.hp : 0 // calculate HP
    let Str = this.props.str !== undefined ? this.props.str.length * 50 : 0 // calculate Str
    let Weak = this.props.weak !== undefined ? this.props.weak.length * 100 : 0 // calculate Weak

    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: '#d4d4d4',
      borderRadius: 50,
      marginLeft: 10,
      marginRight: 10,
    }

    const fillerStyles = {
      height: '100%',
      width: `${Hp || Str || Weak}%`, // show value 
      backgroundColor: '#f3701a', // show color value 
      borderRadius: 'inherit',
      textAlign: 'right'
    }

    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}> 
          <span style={labelStyles} />
        </div>
      </div>
    )
  }
}

export default Abilities
