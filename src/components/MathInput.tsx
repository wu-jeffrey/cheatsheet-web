import React from 'react'
// @ts-ignore
import { addStyles, EditableMathField } from 'react-mathquill'
import Editable from './Editable';

addStyles();

interface State {
  latex: string;
}

class MathInput<Props, State> extends Editable {
  readonly state = {
    ...this.state,
    latex: ''
  }

  render() {
    return (
      <EditableMathField
        latex={this.state.latex}
        onChange={(mathField: any) => {
          this.setState({latex: mathField.latex()})
        }}
      />
    )
  } 
}

export default MathInput;