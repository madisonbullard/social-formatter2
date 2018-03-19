// import React from 'react';

// export const FormatCheckboxInput = props => {

//   const { label, onInputChange, param, value } = props;

//   handleChange = (param, value) => {
//     onInputChange(param, value);
//   }

//   return (
//     <div>
//       <h3>{label}</h3>
//       <input
//         type="checkbox"
//         checked={value}
//         value={value}
//         onClick={event => {
//           event.preventDefault();
//           console.log(event.target.value);
//           this.handleChange(param, event.target.value)
//         }}
//       />
//     </div>
//   );


// }

import React, { Component } from 'react';

class FormatCheckboxInput extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { onInputChange, param } = this.props;
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isChecked != prevState.isChecked) {
      const { onInputChange, param } = this.props;
      onInputChange(param, this.state.isChecked);
    }
  }

  render = () => {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
        <h3>{label}</h3>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />
      </div>
    );
  }
}

export default FormatCheckboxInput;
