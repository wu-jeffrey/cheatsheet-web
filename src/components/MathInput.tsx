import React from 'react'
// @ts-ignore
import { EditableMathField } from 'react-mathquill'
import Editable from './Editable';

interface State {
  latex: string;
}

class MathInput<Props, State> extends Editable {
  state: any = {
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