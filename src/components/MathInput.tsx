import React, { useState } from 'react'
// @ts-ignore
import { EditableMathField } from 'react-mathquill'
import useTransformation from './Transformation';

interface Props {

}

export default function MathInput(props: Props) {
  const [latex, setLatex] = useState<string>('');

  return (
    useTransformation(
        <EditableMathField
          latex={latex}
          onChange={(mathField: any) => {
            setLatex(mathField.latex());
          }}
        />
    )
  )
}