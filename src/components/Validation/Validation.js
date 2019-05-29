import React from 'react';

// class Validation extends Component {

//   validationMessage = null;

//   getValidationMessage = () => {
//     if (this.props.textLength < 5) {
//       return 'Text too short';
//     } else if (this.props.textLength > 10) {
//       return 'Text too long';
//     }
//   }

//   render() {
//     this.validationMessage = this.getValidationMessage();

//     return (
//       <p>{this.validationMessage}</p>
//     )
//   }
// }

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if(props.inputLength <= 5) {
    validationMessage = 'Text too short';
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
}

export default validation;