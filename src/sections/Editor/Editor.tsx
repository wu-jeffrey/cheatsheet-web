import React from 'react'
// @ts-ignore
import { addStyles } from 'react-mathquill'
import Document from './components/Document'
import './Editor.css'

function Editor() {
 addStyles();
 
  return (
    <div className="editor">
      <Document />
    </div>
  )
}

export default Editor;