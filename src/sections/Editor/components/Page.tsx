import React, { useState } from 'react'
// @ts-ignore
import MathInput from '../../../components/MathInput'

function Page() {
  const [children, setChildren] = useState<any>([]) 

  const handleClick = (event: any) => {
    setChildren([...children, 
      <MathInput />
    ])
  }

  return (
    <div className="page" onClick={handleClick}>
      {children}
    </div>
  )
}

export default Page;