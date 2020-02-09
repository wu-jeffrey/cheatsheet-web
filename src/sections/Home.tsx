import React, { useState } from 'react'
// @ts-ignore
import { addStyles, EditableMathField } from 'react-mathquill'

function Home() {
 const [latex, setLatex] = useState<string>('')

 addStyles();
 
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