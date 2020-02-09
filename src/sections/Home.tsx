import React, { useState } from 'react'
// @ts-ignore
import { EditableMathField } from 'react-mathquill'

function Home() {
 const [latex, setLatex] = useState<string>('\\frac{1}{\\sqrt{2}}\\cdot 2')

 
  return (
    <EditableMathField
      latex={latex}
      onChange={(mathField: any) => {
        setLatex(mathField.latex())
      }}
    />
  )
}

export default Home;