import React, { useState } from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import  "codemirror/mode/xml/xml" ;
import  "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";



function Editor(props) {
  const {
    title,language,value,onChange
  }=props

  const handleChange=(editor,data,value)=>{
    onChange(value)
  }
 

  const [open , setOpen]= useState(true)
  return (
    <>
    
    <div className={`editor-container ${open ? "" :'collapsed'}`}>
        <div className='editor-title'>
           {props.title}
            <button className='expand-collapse-button'
             onClick={()=>{
              setOpen(prevOpen=>!prevOpen)
            }}>
              <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}/>
            </button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className= 'code-mirror-wrapper'
        options={{
          lineWrapping: true,
                    lint: true,
                    mode:language,
                    theme: 'material',
                    lineNumbers: true
      
        }}
/>

    </div>
    </>
  )
}

export default Editor